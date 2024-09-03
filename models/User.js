const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Book= mongoose.model("Book", bookSchema);
module.exports = Book;
