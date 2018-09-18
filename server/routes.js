const express = require('express');

const router = express.Router();

const bookController = require('./controllers/book');

router.get('/book', bookController.getBookList);

router.get('/book/:isbn', bookController.getBookByISBN);

module.exports = router;
