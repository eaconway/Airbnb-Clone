import * as BookingsApiUtil from '../util/bookings_api_util';
import {receiveBookingErrors, clearBookingErrors} from './errors_actions';
import {receiveHomes, receiveHome} from './home_actions';

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
  bookingId
});

export const requestUserBookings = () => dispatch => (
  BookingsApiUtil.fetchUserBookings()
    .then(results => {
      dispatch(receiveHomes(results.homes));
      dispatch(receiveBookings(results.bookings));
    }, (errors) => dispatch(receiveBookingErrors(errors.responseJSON)))
);

export const requestBooking = (id) => dispatch => (
  BookingsApiUtil.fetchBooking(id)
    .then(results => {
      dispatch(receiveHome(results.home));
      dispatch(receiveBooking(results.booking));
    },
      (errors) => dispatch(receiveBookingErrors(errors.responseJSON)))
);

export const createBooking = (booking) => dispatch => (
  BookingsApiUtil.createBooking(booking)
    .then((results) => dispatch(receiveBooking(results.booking)),
      (errors) => dispatch(receiveBookingErrors(errors.responseJSON)))
);

export const updateBooking = (booking) => dispatch => (
  BookingsApiUtil.updateBooking(booking)
    .then((booking) => dispatch(receiveBooking(booking)),
      (errors) => dispatch(receiveBookingErrors(errors.responseJSON)))
);

export const deleteBooking = (id) => dispatch => (
  BookingsApiUtil.deleteBooking(id)
    .then(() => dispatch(removeBooking(id)),
      (errors) => dispatch(receiveBookingErrors(errors.responseJSON)))
);
