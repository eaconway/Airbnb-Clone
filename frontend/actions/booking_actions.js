import * as BookingsApiUtil from '../util/bookings_api_util';
import {receiveBookingErrors, clearBookingErrors} from './errors_actions';

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

export const removeBookings = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

export const requestUserBookings = () => dispatch => (
  BookingsApiUtil.fetchUserBookings()
    .then((bookings) => dispatch(receiveBookings(bookings)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);

export const requestBooking = (id) => dispatch => (
  BookingsApiUtil.fetchBooking(id)
    .then((booking) => dispatch(receiveBooking(booking)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);

export const createBooking = (booking) => dispatch => (
  BookingsApiUtil.fetchBooking(booking)
    .then((booking) => dispatch(receiveBooking(booking)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);

export const requestBooking = (booking) => dispatch => (
  BookingsApiUtil.updateBooking(booking)
    .then((booking) => dispatch(receiveBooking(booking)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);

export const deleteBooking = (id) => dispatch => (
  BookingsApiUtil.fetchBooking(id)
    .then(() => dispatch(removeBooking(id)),
      (errors) => dispatch(receiveBookingErrors(errors)))
);
