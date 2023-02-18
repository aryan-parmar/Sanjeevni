const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Phone: { type: Number, unique: true },
  Password: { type: String, required: true },
  token: { type: String },
  Verified: { type: Boolean, default: false },
  Aadhar: { type: Number, unique: true },
  CreatedAt: { type: Date, default: Date.now },
  Role: { type: String, default: "user" },
  FormId: { type: String},
});

module.exports = mongoose.model("user", userSchema);
