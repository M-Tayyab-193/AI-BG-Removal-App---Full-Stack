import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/mongodb.js';

// App Config
const app = express();
await connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => (
    res.send('API is working!')
))

if (process.env.NODE_ENV !== "production") {
    const PORT = 5000 | process.env.PORT;
    app.listen(PORT, () => (
        console.log("Server is running on port:", PORT)
    ))
}

