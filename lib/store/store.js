import { createStore, combineReducers } from 'redux';
import { searchTerm } from './reducers';

export default createStore(combineReducers({ searchTerm }));
