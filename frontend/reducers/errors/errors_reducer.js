import { combineReducers } from 'redux';
import LoginErrorsReducer from './login_errors_reducer';
import HomesErrorsReducer from './homes_errors_reducer';

export default combineReducers({
  login: LoginErrorsReducer,
  homes: HomesErrorsReducer
});
