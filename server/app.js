const next = require('next');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const logger = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const serverPort = process.env.PORT || 8000;
const dev = process.env.NODE_ENV !== 'production';

const baseUrl = dev ? `http://localhost:${serverPort}` : 'https://yetanotherbookshelf.herokuapp.com';

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
const { typeDefs, resolvers } = require('./graphql');

const app = next({ dev });
const handleNext = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  apolloServer.applyMiddleware({ app: server });

  server.use(logger('combined'));
  // Backend API
  server.use('/api/v1/public', apiRouter);
  // Serve next.js pages
  server.get('*', handleNext);

  server.listen(serverPort, () => {
    console.log(`Server started at ${baseUrl}`);
    console.log(`GraphQL API available at ${baseUrl}${apolloServer.graphqlPath}`);
  });
});
