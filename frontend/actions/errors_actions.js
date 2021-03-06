export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const RECEIVE_HOME_ERRORS = 'RECEIVE_HOME_ERRORS';
export const CLEAR_HOME_ERRORS = 'CLEAR_HOME_ERRORS';

export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';
export const CLEAR_SEARCH_ERRORS = 'CLEAR_SEARCH_ERRORS';

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});


export const receiveHomeErrors = errors => {
  return {
    type: RECEIVE_HOME_ERRORS,
    errors
  };
};

export const clearHomeErrors = () => ({
  type: CLEAR_HOME_ERRORS,
});


export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS,
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});

export const receiveSearchErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearSearchErrors = () => ({
  type: CLEAR_REVIEW_ERRORS,
});
