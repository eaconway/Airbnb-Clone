import { RECEIVE_SEARCHES,
  RECEIVE_SEARCH} from '../../actions/search_actions';
import merge from 'lodash/merge';

export default(state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  debugger
  switch(action.type){
    case RECEIVE_SEARCHES:
      return action.searches;
    case RECEIVE_SEARCH:
      if (action.search === undefined) {
        return state;
      }
      return merge({}, state, {[action.search.id]: action.search})
    default:
      return state;
  }
};
