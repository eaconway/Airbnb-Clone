import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import * as HomeApiUtil from './util/homes_api_util';
import * as BookingsApiUtil from './util/bookings_api_util';
import configureStore from './store/store';
import Root from './component/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;

  if (window.currentUser) {
    preloadedState = {
      users: { [window.currentUser.id]: window.currentUser},
      session: { id: window.currentUser.id},
    };
    delete window.currentUser;
  }

  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store}/>, root);

  window.fetchHomes = HomeApiUtil.fetchHomes;
  window.fetchUserHomes = HomeApiUtil.fetchUserHomes;
  window.signup = SessionApiUtil.signup;
  window.login = SessionApiUtil.login;
  window.logout = SessionApiUtil.logout;
  window.getState = store.getState;

  window.fetchUserBookings = BookingsApiUtil.fetchUserBookings;
  window.fetchBooking = BookingsApiUtil.fetchBooking;
  window.createBooking = BookingsApiUtil.createBooking;
  window.updateBooking = BookingsApiUtil.updateBooking;
  window.deleteBooking = BookingsApiUtil.deleteBooking;
});
