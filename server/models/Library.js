const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  date: {
    type: Date,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  tag: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  move: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  message: String,
  required: true,
  validate: /^[A-Za-z0-9 ]*$/
});

const Library = mongoose.model("Library", librarySchema);

module.exports = Library;
