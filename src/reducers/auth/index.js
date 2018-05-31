import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { loginSuccess, registrationFailure, registrationRequest, registrationSuccess } from '../../actions/auth/index';

const isAuthorized = handleActions({
  [loginSuccess]: () => true
}, null);


const registationError = handleActions({
  [registrationFailure]: (state, action) => action.payload,
  [registrationRequest]: () => null,
  [registrationSuccess]: () => null,
}, null);

export default combineReducers({
  isAuthorized,
  registationError
});

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getRegistrationError = state => state.auth.registationError;
