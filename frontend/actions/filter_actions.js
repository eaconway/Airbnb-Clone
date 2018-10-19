import {requestHomes} from './home_actions';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filters) => {
  return {
    type: UPDATE_FILTER,
    filters
  }
};

export const updateFilter = (filters) => (dispatch, getState) => {
  dispatch(changeFilter(filters));
  return requestHomes(getState().ui.filters)(dispatch);
};
