import {createStore, combineReducers} from 'redux';
import {searchTerm} from '../lib/reducers';

export default createStore(combineReducers({searchTerm}));