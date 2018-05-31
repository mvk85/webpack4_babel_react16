import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {loginSuccess, logout} from "../../actions/auth/index";

const isAuthorized = handleActions({
  [loginSuccess]: () => true,
  [logout]: () => false
}, false);

export default combineReducers({
  isAuthorized
});

export const getIsAuthorized = state => state.auth.isAuthorized;