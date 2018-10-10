import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS } from '../../actions/errors_actions';
import merge from 'lodash/merge';

export default (state = [] , action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};
