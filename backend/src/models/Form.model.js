const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  formName: { type: Array, default: [false,false,false,false,false,false,false,false] },
  formFields: { type: Array, default: [] },
  formResponses: { type: Array, default: []},
  formCreatedAt: { type: Date, default: Date.now },
  formUpdatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("form", formSchema);
