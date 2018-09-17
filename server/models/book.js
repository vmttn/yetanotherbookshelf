var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
  isbn: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String
});

module.exports = mongoose.model('Book', bookSchema);
