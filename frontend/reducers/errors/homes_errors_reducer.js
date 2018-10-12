import {
  RECEIVE_HOMES_ERRORS,
  CLEAR_HOMES_ERRORS } from '../../actions/errors_actions';
import merge from 'lodash/merge';

export default (state = [] , action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_HOMES_ERRORS:
      return action.errors;
    case CLEAR_HOMES_ERRORS:
      return [];
    default:
      return state;
  }
};
