export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const RECEIVE_HOME_ERRORS = 'RECEIVE_HOME_ERRORS';
export const CLEAR_HOME_ERRORS = 'CLEAR_HOME_ERRORS';

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const receiveHomeErrors = errors => ({
  type: RECEIVE_HOME_ERRORS,
  errors
});

export const clearHomeErrors = () => ({
  type: CLEAR_HOME_ERRORS,
});
