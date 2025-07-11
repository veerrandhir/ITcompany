const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a project name"],
    trim: true,
    maxlength: [100, "Name cannot exceed 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  client: {
    type: mongoose.Schema.ObjectId,
    ref: "Client",
    required: true,
  },
  status: {
    type: String,
    enum: ["planning", "development", "review", "completed"],
    default: "planning",
  },
  websiteUrl: String,
  githubUrl: String,
  technologies: {
    type: [String],
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  deadline: Date,
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Project", projectSchema);
