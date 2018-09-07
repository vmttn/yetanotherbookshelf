var next = require('next');
var express = require('express');

var logger = require('morgan');
var mongoose = require('mongoose');

var dev = process.env.NODE_ENV !== 'production';
if (dev) {
  require('dotenv').config();
}

var port = process.env.PORT || 8000;
var rootUrl = `http://localhost:${port}`;

var dbUser = process.env.DB_USER;
var dbHost = process.env.DB_HOST || 'localhost';
var dbPort = process.env.DB_PORT;
var dbPass = process.env.DB_PASS;


var app = next();

mongoose
  .connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/bookshelf`, {useNewUrlParser: true})
  .catch(error => console.log(error));

mongoose.Promise = global.Promise;

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

var bookSchema = new mongoose.Schema({
  isbn: {type: Number, required: true},
  title: {type: String, required: true},
  author: {type: String, required: true},
  description: String
});

var Book = mongoose.model('Book', bookSchema);

app.prepare().then(() => {
  const server = express();

  server.use(logger(dev && 'dev'));
  server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });

  server.get('/api/v1/public/book', (req, res) => {
    Book
      .find()
      .exec((err, books) => {
        res.json(books);
      })
  });

  server.get('/api/v1/public/book/:isbn', (req, res) => {
    Book
      .find({isbn: parseInt(req.params.isbn)})
      .exec((err, books) => {
        res.json(books);
      })
  });

  server.listen(port, () => {
    console.log(`Server started at ${rootUrl}`);
  });
});
