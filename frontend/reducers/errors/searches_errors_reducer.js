import {
  RECEIVE_SEARCH_ERRORS,
  CLEAR_SEARCH_ERRORS } from '../../actions/errors_actions';
import merge from 'lodash/merge';

export default (state = [] , action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_SEARCH_ERRORS:
      if (action.errors === undefined) {
        return [];
      }
      return action.errors;
    case CLEAR_SEARCH_ERRORS:
      return [];
    default:
      return state;
  }
};
