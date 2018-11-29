import * as LikesApiUtil from '../util/saved_api_util';
// import {receiveBookingErrors, clearBookingErrors} from './errors_actions';
// import {receiveLikes, receiveHome} from './home_actions';

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLikes = likes => ({
  type: RECEIVE_LIKES,
  likes
});

export const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});

export const requestUserLikes = () => dispatch => (
  LikesApiUtil.fetchUserLikes()
    .then(likes => dispatch(receiveLikes(likes)))
);

export const createLike = (like) => dispatch => (
  LikesApiUtil.createLike(like)
    .then(like => dispatch(receiveLike(like)))
);

export const deleteLike = (likeId) => dispatch => (
  LikesApiUtil.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)))
);
