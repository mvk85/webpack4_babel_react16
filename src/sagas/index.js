import { all } from 'redux-saga/effects';
// import { authUserWatcher, authFlow, registrationRequestWatch } from './auth/index';
import auth from './auth';
import currency from './currency';

export default function* () {
  yield all([
    ...auth,
    ...currency
  ]);
}