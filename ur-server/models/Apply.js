const mongoose = require("mongoose");

const Apply = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Apply", Apply);
