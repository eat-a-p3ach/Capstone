const mongoose = require("mongoose");

const moveSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  date: {
    type: Date,
    required: true
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
  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Move = mongoose.model("Move", moveSchema);

module.exports = Move;
