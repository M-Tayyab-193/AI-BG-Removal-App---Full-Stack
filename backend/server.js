import express from "express";
import cors from "cors";
import { connectDB } from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import imageRouter from "./routes/imageRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect DB
await connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API is working!");
});
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.use("/api/payment", paymentRouter);

if (process.env.NODE_ENV !== "production") {
  const PORT = 5000 | process.env.PORT;
  app.listen(PORT, () => console.log("Server is running on port:", PORT));
}
export default app;
