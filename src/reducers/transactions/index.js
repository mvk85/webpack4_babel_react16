import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchUserTransactionsRequest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure
} from "../../actions/transactions/index";

const isLoading = handleActions({
  [fetchUserTransactionsRequest]: () => true,
  [fetchUserTransactionsSuccess]: () => false,
  [fetchUserTransactionsFailure]: () => false
}, false);

const data = handleActions({
  [fetchUserTransactionsSuccess]: (state, action) => action.payload
}, []);

export default combineReducers({
  isLoading,
  data
});

export const getUserTransactions = state => state.transactions.data;
export const userTransactionsIsLoading = state => state.transactions.isLoading;