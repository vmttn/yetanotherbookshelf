import { LOAD_BOOKS, DELETE_BOOK } from '../actions/books';

export const books = (state = [], action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.books;
    case DELETE_BOOK:
      return state.filter(book => book.isbn !== action.isbn);
    default:
      return state;
  }
};
