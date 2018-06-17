import { takeLatest, call, put, fork } from 'redux-saga/effects';
import {
  fetchUserTransactionsRequest,
  fetchUserTransactionsSuccess,
  fetchUserTransactionsFailure
} from '../../actions/transactions';
import { getUserTransactions } from '../../api/requests';

export function* transactionsWorker() {
  try {
    const transactions = yield call(getUserTransactions);

    yield put(fetchUserTransactionsSuccess(transactions.data.result));
  } catch (error) {
    yield put(fetchUserTransactionsFailure(error));
  }
}

export function* transactionsWatch() {
  yield takeLatest(fetchUserTransactionsRequest, transactionsWorker);
}

export default [
  fork(transactionsWatch)
];