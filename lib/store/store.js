import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { searchTerm } from './reducers/search';
import { books } from './reducers/books';

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
};

const reducers = combineReducers({ searchTerm, books });
const middlewares = applyMiddleware(logger, thunkMiddleware);

export default () => createStore(reducers, middlewares);
