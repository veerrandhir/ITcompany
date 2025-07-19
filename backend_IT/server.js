// Load environment variables
require("dotenv").config();

// Core modules
const express = require("express");
const mongoose = require("mongoose");

// Security & logging middleware
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// DEBUG: Print URI to verify env loading (optional, remove in prod)
console.log("Connecting to MongoDB URI:", process.env.MONGODB_URI);

// Validate MONGODB_URI
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in the environment variables.");
  process.exit(1);
}

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Basic Test Route
app.get("/", (req, res) => {
  res.send("🌐 CODDEX Backend API is running");
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🔌 MongoDB connection closed.");
  process.exit(0);
});
