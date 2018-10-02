import { SET_SEARCH_TERM } from '../actions/search';

export const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.searchTerm;
    default:
      return state;
  }
};
