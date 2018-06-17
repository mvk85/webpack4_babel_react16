import { combineReducers } from 'redux';
import auth from './auth';
import currency from './currency';
import transactions from './transactions';

export default combineReducers({
  auth,
  currency,
  transactions
});