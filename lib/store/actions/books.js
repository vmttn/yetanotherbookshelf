import fetch from 'isomorphic-unfetch';

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const DELETE_BOOK = 'DELETE_BOOK';

export const loadBooks = () => {
  return (dispatch, getState) => {
    const { books } = getState();
    if (books && books.length > 0) return;
    fetch('/api/v1/public/book')
      .then(resp => resp.json())
      .then(books => dispatch({ type: LOAD_BOOKS, books }))
      .catch(err => console.log(err));
  };
};

export const deleteBook = id => ({
  type: DELETE_BOOK,
  isbn: id
});
