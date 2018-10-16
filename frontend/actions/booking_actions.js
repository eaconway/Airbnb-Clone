import * as HomeApiUtil from '../util/homes_api_util';
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

export const requestBookings
