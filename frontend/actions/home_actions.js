import * as HomeApiUtil from '../util/homes_api_util';
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
    .then(homes => dispatch(receiveHomes(homes)),
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
);

export const requestUserHomes = () => dispatch => (
  HomeApiUtil.fetchUserHomes()
    .then(homes => dispatch(receiveHomes(homes)),
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
);

export const requestHome = (homeId) => dispatch => (
  HomeApiUtil.fetchHome(homeId)
    .then(home => dispatch(receiveHome(home)),
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)))
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
