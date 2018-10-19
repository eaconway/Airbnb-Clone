import * as SearchApiUtil from '../util/searches_api_util';
import {receiveHomes, receiveHome, requestHomes} from './home_actions';

export const RECEIVE_SEARCHES = 'RECEIVE_SEARCHES';
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

export const receiveSearches = searches => ({
  type: RECEIVE_SEARCHES,
  searches
});

export const receiveSearch = search => ({
  type: RECEIVE_SEARCH,
  search
});

export const requestSearches = (authorId) => dispatch => (
  SearchApiUtil.fetchSearches(authorId)
    .then(searches => dispatch(receiveSearches(searches)))
);

export const requestSearch = (id) => dispatch => (
  SearchApiUtil.fetchSearch(id)
    .then(results => {
      dispatch(receiveSearch(results.search));
      dispatch(receiveHomes(results.homes));
    })
)

export const createSearch = (search) => dispatch => {
  let res = SearchApiUtil.createSearch(search)
    .then(results => {
      dispatch(receiveSearch(results.search));
      dispatch(receiveHomes(results.homes));
      return results.search;
    });
  return res;
};
