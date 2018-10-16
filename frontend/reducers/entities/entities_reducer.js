import { combineReducers } from 'redux';
import homesReducer from './homes_reducer';
import bookingsReducer from './bookings_reducer';

export default combineReducers({
  homes: homesReducer,
  bookings: bookingsReducer
});
