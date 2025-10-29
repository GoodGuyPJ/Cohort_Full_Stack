import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import diaryRoutes from "./routes/diaryRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/daily_diary";
mongoose.connect(MONGO)
  .then(() => console.log("Mongo connected"))
  .catch(err => console.error("Mongo connect error", err));

app.use("/api/diary", diaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening ${PORT}`));
