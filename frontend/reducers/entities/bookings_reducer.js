import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING} from '../../actions/booking_actions';
import merge from 'lodash/merge';

export default(state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_BOOKINGS:
      debugger
      return action.bookings;
    case RECEIVE_BOOKING:
      debugger;
      return merge({}, state, {[action.booking.id]: action.booking });
    case REMOVE_BOOKING:
      delete newState[action.bookingId]
      return newState;
    default:
      return state;
  }
};