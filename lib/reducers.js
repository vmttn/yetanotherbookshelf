export const searchTerm = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      console.log(action.searchTerm);
      return action.searchTerm;
    default:
      return state;
  }
};