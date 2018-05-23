import { combineReducer } from 'redux';
import { handleActions } from 'redux-actions';
import {loginSuccess} from "../../actions/auth/index";

const isAuthorized = handleActions({
  [loginSuccess]: () => true
});

export default combineReducer({
  isAuthorized
});

export const getIsAuthorized = state => state.auth.isAuthorized;