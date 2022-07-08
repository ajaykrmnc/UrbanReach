const mongoose = require("mongoose");

const Jobapply = new mongoose.Schema({
  role: {
    type: String,
    trim: true,
    required: true,
    maxlength: 100,
  },
  skill: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  jd: {
    type: String,
    trim: true,
    required: true,
    maxlength: 1000,
  },
});

module.exports = mongoose.model("Job", Jobapply);
