import {
  RECEIVE_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE} from '../../actions/saved_actions';
import merge from 'lodash/merge';

export default(state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_LIKES:
      // if (action.bookings === undefined) return {};
      return action.likes;
    case RECEIVE_LIKE:
      return merge({}, state, {[action.like.id]: action.like });
    case REMOVE_LIKE:
      delete newState[action.likeId]
      return newState;
    default:
      return state;
  }
};
