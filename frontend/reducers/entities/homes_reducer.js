import {
  RECEIVE_HOMES,
  RECEIVE_HOME,
  REMOVE_HOME} from '../../actions/home_actions';
import merge from 'lodash/merge';

export default(state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_HOMES:
      return action.homes;
    case RECEIVE_HOME:
      debugger
      return merge({}, state, {[action.home.id]: action.home });
    case REMOVE_HOME:
      delete newState[action.homeId]
      return newState;
    default:
      return state;
  }
};
