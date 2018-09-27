import { createStore, combineReducers } from 'redux';
import { searchTerm, bookList } from './reducers';

export default () => createStore(combineReducers({ searchTerm, bookList }));
