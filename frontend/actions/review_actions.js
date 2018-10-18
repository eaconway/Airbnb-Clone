import * as ReviewsApiUtil from '../util/reviews_api_util';
import {receiveReviewErrors, clearReviewErrors} from './errors_actions';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});

export const requestReviews = () => dispatch => (
  ReviewsApiUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)),
      (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const requestReview = (id) => dispatch => (
  ReviewsApiUtil.fetchReview(id)
    .then(review => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const createReview = (review) => dispatch => (
  ReviewsApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const updateReview = (review) => dispatch => (
  ReviewsApiUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);

export const deleteReview = (id) => dispatch => (
  ReviewsApiUtil.deleteReview(id)
    .then(() => dispatch(removeReview(id)),
      (errors) => dispatch(receiveReviewErrors(errors.responseJSON)))
);
