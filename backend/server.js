import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import mongoose from "mongoose";
import connectToMongoDb from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
dotenv.config();
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server running on port ${PORT}`);
});
