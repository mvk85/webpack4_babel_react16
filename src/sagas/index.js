import { all } from 'redux-saga/effects';
import auth from './auth';
import currency from './currency';
import transactions from './transactions';
import wallet from './wallet';
import operation from './operations/currency';

export default function* () {
  yield all([
    ...currency,
    ...wallet,
    ...auth,
    ...transactions,
    ...operation
  ]);
}