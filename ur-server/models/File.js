const mongoose = require("mongoose");

const File = new mongoose.Schema({
  photo: {
    data: Buffer,
    contentType: String,
  },
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

module.exports = mongoose.model("File", File);
