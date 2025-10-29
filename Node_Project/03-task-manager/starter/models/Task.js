const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: [20, "Name must be at most 20 characters long"] },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);
