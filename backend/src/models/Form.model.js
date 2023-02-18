const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  createdAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
  formName: { type: Array, default: [false,false,false,false,false,false,false,false] },
  form: {type: Object}
});

module.exports = mongoose.model("form", formSchema);
