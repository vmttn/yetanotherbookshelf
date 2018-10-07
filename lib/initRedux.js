import { combineReducers, createStore } from 'redux';
import { searchTerm } from './store/reducers/search';

let reduxStore = null;

function create() {
  return createStore(combineReducers({ searchTerm }));
}

export default function initReduxStore() {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create();
  }

  // Reuse client on the client-side
  if (!reduxStore) {
    reduxStore = create();
  }

  return reduxStore;
}
