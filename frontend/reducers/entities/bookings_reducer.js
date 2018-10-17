import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING} from '../../actions/booking_actions';
import merge from 'lodash/merge';

export default(state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  debugger
  switch(action.type){
    case RECEIVE_BOOKINGS:
      if (action.bookings === undefined) {
        return state;
      }
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, state, {[action.booking.id]: action.booking });
    case REMOVE_BOOKING:
      delete newState[action.bookingId]
      return newState;
    default:
      return state;
  }
};
