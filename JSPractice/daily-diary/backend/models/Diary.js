import mongoose from "mongoose";

const PageSchema = new mongoose.Schema({
  pageNumber: { type: Number, required: true },
  content: { type: String, default: "" },
  updatedAt: { type: Date, default: Date.now }
});

const DiarySchema = new mongoose.Schema({
  dateISO: { type: String, required: true, unique: true }, // YYYY-MM-DD
  pages: { type: [PageSchema], default: [] },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Diary", DiarySchema);
