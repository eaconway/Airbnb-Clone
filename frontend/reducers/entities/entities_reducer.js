import { combineReducers } from 'redux';
import homesReducer from './homes_reducer';
import bookingsReducer from './bookings_reducer';
import reviewsReducer from './reviews_reducer';
import searchesReducer from './searches_reducer';
import hostingsReducer from './hostings_reducer';
import likesReducer from './saved_reducer';

export default combineReducers({
  homes: homesReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer,
  searches: searchesReducer,
  hostings: hostingsReducer,
  likes: likesReducer
});
