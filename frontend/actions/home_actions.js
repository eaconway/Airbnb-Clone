import * as HomeApiUtil from '../util/homes_api_util';
import {receiveBookings} from './booking_actions';
import {receiveHostings} from './hosting_actions';
import {receiveReviews} from './review_actions';
import {receiveHomeErrors, clearHomeErrors} from './errors_actions';

export const RECEIVE_HOMES = 'RECEIVE_HOMES';
export const RECEIVE_HOME = 'RECEIVE_HOME';
export const REMOVE_HOME = "REMOVE_HOME";

export const receiveHomes = homes => ({
  type: RECEIVE_HOMES,
  homes
});

export const receiveHome = home => ({
  type: RECEIVE_HOME,
  home
});

export const removeHome = homeId => ({
  type: REMOVE_HOME,
  homeId
});

export const requestHomes = (filters) => dispatch => (
  HomeApiUtil.fetchHomes(filters)
    .then(results => {
      // return dispatch(receiveHomes(results.homes))
      return dispatch(receiveHomes(results));
    },
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
);

export const requestUserHomes = () => dispatch => (
  HomeApiUtil.fetchUserHomes()
    .then(results => {
      dispatch(receiveHomes(results.homes));
      dispatch(receiveHostings(results.hostings));
    }, (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
);

export const requestHome = (homeId) => dispatch => (
  HomeApiUtil.fetchHome(homeId)
    .then(results => {
      dispatch(receiveHome(results.home));
      dispatch(receiveBookings(results.bookings));
      dispatch(receiveReviews(results.reviews));
    }, (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
);

export const createHome = (formData) => dispatch => (
  HomeApiUtil.createHome(formData)
    .then(home => dispatch(receiveHome(home)),
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
);

export const updateHome = (formData) => dispatch => {
  return (
  HomeApiUtil.updateHome(formData)
    .then(home => dispatch(receiveHome(home)),
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
  )
};

export const deleteHome = (homeId) => dispatch => (
  HomeApiUtil.deleteHome(homeId)
    .then(() => dispatch(removeHome(homeId)),
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
);
