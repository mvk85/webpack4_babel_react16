import { createActions } from 'redux-actions';

export const {
  logout,
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationSuccess,
  registrationFailure
} = createActions({
  LOGOUT: undefined,
  LOGIN_REQUEST: undefined,
  LOGIN_SUCCESS: undefined,
  LOGIN_FAILURE: undefined,
  REGISTRATION_REQUEST: undefined,
  REGISTRATION_SUCCESS: undefined,
  REGISTRATION_FAILURE: undefined
});