const { gql } = require('apollo-server-express');

const Book = require('./models/book');

const typeDefs = gql`
  type Query {
    books: [Book]
  }
  type Book {
    isbn: String!
    title: String
    author: String
  }
`;

const resolvers = {
  Query: {
    books(parent, args, context, info) {
      return Book.find().exec();
    }
  }
};

module.exports = { typeDefs, resolvers };
