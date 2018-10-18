import {
  RECEIVE_HOME_ERRORS,
  CLEAR_HOME_ERRORS } from '../../actions/errors_actions';
import merge from 'lodash/merge';

export default (state = [] , action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_HOME_ERRORS:
      return action.errors;
    case CLEAR_HOME_ERRORS:
      return [];
    default:
      return state;
  }
};
