import {
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS } from '../../actions/errors_actions';
import merge from 'lodash/merge';

export default (state = [] , action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_REVIEW_ERRORS:
      if (action.errors === undefined) {
        return ["Please fill in all fields before submitting"];
      }
      return action.errors;
    case CLEAR_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
};
