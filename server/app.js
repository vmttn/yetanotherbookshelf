const next = require('next');
const express = require('express');

const logger = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const dbUser = process.env.DB_USER,
  dbPass = process.env.DB_PASS,
  dbHost = process.env.DB_HOST,
  dbPort = process.env.DB_PORT,
  port = process.env.PORT || 8000,
  dev = process.env.NODE_ENV !== 'production';

const baseUrl = dev ? `http://localhost:${port}` : 'https://yetanotherbookshelf.herokuapp.com';

mongoose
  .connect(
    `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/bookshelf`,
    { useNewUrlParser: true }
  )
  .catch(error => console.log(error));

mongoose.Promise = global.Promise;

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));

const apiRouter = require('./routes');

const app = next({ dev });
const handleNext = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(logger('combined'));
  // Backend API
  server.use('/api/v1/public', apiRouter);
  // Serve next.js pages
  server.get('*', handleNext);

  server.listen(port, () => {
    console.log(`Server started at ${baseUrl}`);
  });
});
