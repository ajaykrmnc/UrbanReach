const mongoose = require("mongoose");

const ContactUs = new mongoose.Schema({
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
  content: {
    type: String,
    trim: true,
    required: true,
    maxlength: 500,
  },
});

module.exports = mongoose.model("Contact", ContactUs);
