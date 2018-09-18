const Book = require('../models/book');

exports.getBookList = function getBookList(req, res, next) {
  Book.find().exec((err, books) => {
    if (err) {
      next(err);
    } else {
      res.json(books);
    }
  });
};

exports.getBookByISBN = function getBookByISBN(req, res, next) {
  Book.findOne({ isbn: req.params.isbn }).exec((err, book) => {
    if (err) {
      next(err);
    } else {
      res.json(book);
    }
  });
};
