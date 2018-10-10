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
  type Mutation {
    addBook(isbn: String, title: String, author: String): Book
    deleteBook(isbn: String): Boolean
  }
`;

const resolvers = {
  Query: {
    books(parent, args, context, info) {
      return Book.find().exec();
    }
  },
  Mutation: {
    addBook(parent, args, context, info) {
      const book = new Book({ isbn: args.isbn, title: args.title, author: args.author });
      return book.save();
    },
    deleteBook(parent, args, context, info) {
      // Not allowed for until we have proper authentication
      // Here were prevent user from hitting the backend DB.
      // The book will be temporarely deleted on the client view.
      // And reappear once apollo updates its cache or user reloadds.
      //return !!Book.findOneAndDelete({ isbn: args.isbn }).exec();
      return true;
    }
  }
};

module.exports = { typeDefs, resolvers };
