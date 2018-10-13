import {requestHomes} from './home_actions';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, params) => {
  return {
    type: UPDATE_FILTER,
    filter,
    params
  }
};

export const updateFilter = (filter, params) => (dispatch, getState) => {
  dispatch(changeFilter(filter, params));
  return requestHomes(getState().ui.filters)(dispatch);
};
