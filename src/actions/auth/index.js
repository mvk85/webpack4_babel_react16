import { createActions } from 'redux-actions';

export const {
  logout,
  loginRequest,
  loginSuccess,
  loginFailure
} = createActions({
  LOGOUT: undefined,
  LOGIN_REQUEST: undefined,
  LOGIN_SUCCESS: undefined,
  LOGIN_FAILURE: undefined
});