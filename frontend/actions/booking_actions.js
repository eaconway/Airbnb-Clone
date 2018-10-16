import * as BookingsApiUtil from '../util/bookings_api_util';
import {receiveBookingErrors, clearBookingErrors} from './errors_actions';
import {receiveHomes} from './home_actions';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = "REMOVE_BOOKING";

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingIds
});

export const requestUserBookings = () => dispatch => (
  BookingsApiUtil.fetchUserBookings()
    .then(results => {
      dispatch(receiveBookings(results.bookings));
      dispatch(receiveHomes(results.homes));
    }, (errors) => dispatch(receiveBookingErrors(errors)))
);

export const requestBooking = (id) => dispatch => (
  BookingsApiUtil.fetchBooking(id)
    .then((booking) => dispatch(receiveBooking(booking)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);

export const createBooking = (booking) => dispatch => (
  BookingsApiUtil.createBooking(booking)
    .then((booking) => dispatch(receiveBooking(booking)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);

export const updateBooking = (booking) => dispatch => (
  BookingsApiUtil.updateBooking(booking)
    .then((booking) => dispatch(receiveBooking(booking)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);

export const deleteBooking = (id) => dispatch => (
  BookingsApiUtil.fetchBooking(id)
    .then(() => dispatch(removeBooking(id)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);
