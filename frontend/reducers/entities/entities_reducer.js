import { combineReducers } from 'redux';
import homesReducer from './homes_reducer';

export default combineReducers({
  homes: homesReducer
});
