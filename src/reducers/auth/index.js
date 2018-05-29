import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {loginSuccess} from "../../actions/auth/index";

const isAuthorized = handleActions({
  [loginSuccess]: () => true
}, null);

export default combineReducers({
  isAuthorized
});

export const getIsAuthorized = state => state.auth.isAuthorized;