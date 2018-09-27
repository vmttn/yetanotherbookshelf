export const searchTerm = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return action.searchTerm || '';
    default:
      return state;
  }
};

export const bookList = (state = [], action) => {
  switch (action.type) {
    case 'SET_BOOK_LIST':
      return action.bookList || [];
    default:
      return state;
  }
};
