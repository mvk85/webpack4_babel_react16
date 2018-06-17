import { all } from 'redux-saga/effects';
import auth from './auth';
import currency from './currency';
import transactions from './transactions';

export default function* () {
  yield all([
    ...currency,
    ...auth,
    ...transactions
  ]);
}