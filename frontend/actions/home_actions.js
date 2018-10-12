import * as HomeApiUtil from '../util/home_api_util';
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

export const requestHomes = () => dispatch =>
  HomeApiUtil.fetchHomes()
    .then(homes => dispatch(receiveHomes(homes)),
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)));


export const requestHome = (id) => dispatch =>
  HomeApiUtil.fetchHome()
    .then(home => dispatch(receiveHome(home)),
    (errors) => dispatch(receiveHomeErrors(errors.responseJSON)));
