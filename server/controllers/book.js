const Book = require('../models/book');

exports.getBookList = function(req, res, next) {
  Book.find().exec((err, books) => {
    if (err) return next(err);
    res.json(books);
  });
};

exports.getBookByISBN = function(req, res, next) {
  Book.findOne({ isbn: req.params.isbn }).exec((err, book) => {
    if (err) return next(err);
    res.json(book);
  });
};
