import { Webhook } from "svix"
import userModel from "../models/userModel.js";

// Function to manage clerk user and store data in DB
const clerkwebhook = async (req, res) => {

    try {
        const hook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await hook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })
        const { data, type } = req.body;

        switch (type) {
            case "user.created": {
                const userData = {
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url

                }
                await userModel.create(userData);
                res.status(200).json({
                    success: true,
                    message: "User created successfully",
                    user: userData
                });
                break;
            }
            case "user.updated": {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url

                }
                await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
                res.status(200).json({
                    success: true,
                    message: "User's data updated successfully",
                    user: userData
                });
                break;
            }
            case "user.deleted": {
                await userModel.findByIdAndDelete({ clerkId: data.id })
                res.status(200).json({
                    success: true,
                    message: "User deleted successfully"
                });
                break;
            }
        }
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
        console.log("Error at clerkWebHook:", error.message);
    }

}

// Function to get credits for the user account
const userCredits = async (req, res) => {
    try {
        const clerkId = req.clerkId;
        const userData = await userModel.findOne({ clerkId: clerkId });
        console.log("User data found:", userData);

        res.status(200).json({
            success: true,
            credits: userData.creditBalance
        });

    }

    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
        console.log("Error in loading user credits:", error.message);
    }
}

export { clerkwebhook, userCredits };