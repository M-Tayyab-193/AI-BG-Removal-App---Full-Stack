import express from "express";
import cors from "cors";
import { connectDB } from "./config/mongodb.js";

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

export default app;
