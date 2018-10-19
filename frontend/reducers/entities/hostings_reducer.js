import { RECEIVE_HOSTINGS} from '../../actions/hosting_actions';
import merge from 'lodash/merge';

export default(state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type){
    case RECEIVE_HOSTINGS:
      return action.hostings;
    default:
      return state;
  }
};
