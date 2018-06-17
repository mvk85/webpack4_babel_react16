import { createActions } from 'redux-actions';

export const {
  fetchUserTransactionsRequest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure
} = createActions(
  'FETCH_USER_TRANSACTIONS_REQUEST',
  'FETCH_USER_TRANSACTIONS_SUCCESS',
  'FETCH_USER_TRANSACTIONS_FAILURE'
);