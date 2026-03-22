import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/auth", authRoutes);

app.get("/test", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});