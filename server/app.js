const next = require('next');
const express = require('express');

const logger = require('morgan');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production';

require('dotenv').config();

const port = process.env.PORT || 8000;
const rootUrl = dev ? `http://localhost:${port}` : 'https://yetanotherbookshelf.herokuapp.com';

const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbPass = process.env.DB_PASS;


const app = next({ dev });
const handle = app.getRequestHandler();

mongoose
  .connect(`mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/bookshelf`, { useNewUrlParser: true })
  .catch(error => console.log(error));

mongoose.Promise = global.Promise;

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

const bookSchema = new mongoose.Schema({
  isbn: { type: Number, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
});

const Book = mongoose.model('Book', bookSchema);

app.prepare().then(() => {
  const server = express();

  server.use(logger('combined'));

  server.get('/api/v1/public/book', (req, res) => {
    Book
      .find()
      .exec((err, books) => {
        res.json(books);
      });
  });

  server.get('/api/v1/public/book/:isbn', (req, res) => {
    Book
      .find({ isbn: parseInt(req.params.isbn, 10) })
      .exec((err, books) => {
        res.json(books);
      });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`Server started at ${rootUrl}`);
  });
});
