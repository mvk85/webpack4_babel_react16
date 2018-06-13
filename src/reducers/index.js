import { combineReducers } from 'redux';
import auth from './auth';
import currency from './currency';

export default combineReducers({
  auth,
  currency
})