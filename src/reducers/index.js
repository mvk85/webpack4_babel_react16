import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import auth from './auth';
import currency from './currency';
import transactions from './transactions';
import wallet from './wallet';

export default combineReducers({
  notifications,
  auth,
  currency,
  transactions,
  wallet
});