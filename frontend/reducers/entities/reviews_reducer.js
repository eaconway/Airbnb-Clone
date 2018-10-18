import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW} from '../../actions/review_actions';
import merge from 'lodash/merge';

export default(state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_REVIEWS:
      if (action.reviews === undefined){
        return {};
      }
      return action.reviews;
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review });
    case REMOVE_REVIEW:
      delete newState[action.reviewId]
      return newState;
    default:
      return state;
  }
};
