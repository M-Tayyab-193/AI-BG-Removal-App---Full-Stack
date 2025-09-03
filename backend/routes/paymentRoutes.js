import express from "express";
import { checkout } from "../controllers/paymentController.js";
import authUser from "../middlewares/auth.js";
import bodyParser from "body-parser";
const paymentRouter = express.Router();
import { handleStripeWebhook } from "../controllers/paymentController.js";

paymentRouter.post("/create-checkout-session", authUser, checkout);
paymentRouter.post(
  "/stripe",
  bodyParser.raw({ type: "application/json" }),
  handleStripeWebhook
);

export default paymentRouter;
