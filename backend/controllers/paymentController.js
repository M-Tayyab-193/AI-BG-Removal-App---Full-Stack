import Stripe from "stripe";
import { connectDB } from "../config/mongodb.js";
import dotenv from "dotenv";
import userModel from "../models/userModel.js";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const checkout = async (req, res) => {
  try {
    const { priceId } = req.body;
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payment/cancelled`,
      metadata: {
        clerkId: req.clerkId,
      },
    });

    res.status(200).json({
      success: true,
      url: session.url,
    });
  } catch (error) {
    console.log("Error during checkout:", error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const PRICE_CREDITS_MAP = {
  [process.env.BASIC_PLAN_PRICE_ID]: 100,
  [process.env.ADVANCED_PLAN_PRICE_ID]: 500,
  [process.env.BUSINESS_PLAN_PRICE_ID]: 5000,
};

export const handleStripeWebhook = async (req, res) => {
  try {
    const sig = req.headers["stripe-signature"];

    // Verify webhook event
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Expand to get line_items (since priceId is needed)
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ["line_items"],
      });

      const clerkId = session.metadata.clerkId;
      const priceId = fullSession.line_items.data[0].price.id; // only 1 item always

      const credits = PRICE_CREDITS_MAP[priceId] || 0;

      if (credits > 0) {
        await connectDB();
        const user = await userModel.findOne({ clerkId });

        if (user) {
          user.creditBalance = (user.creditBalance || 0) + credits;
          await user.save();
          console.log(`Added ${credits} credits to user ${clerkId}`);
        } else {
          console.error(`User not found for clerkId: ${clerkId}`);
        }
      }
    }

    res
      .status(200)
      .json({ received: true, message: "Webhook handled successfully" });
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
};
