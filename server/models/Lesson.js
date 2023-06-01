const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  url: {
    type: String
  },
  allDay: {
    type: Boolean,
    default: false
  }
});

const Lesson = mongoose.model("Appointment", lessonSchema);

module.exports = Lesson;
