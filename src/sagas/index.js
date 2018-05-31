import { all, fork } from 'redux-saga/effects';
import { authUserWatcher, registrationRequestWatch } from './auth/index';

export default function* () {
  yield all([
    fork(authUserWatcher),
    fork(registrationRequestWatch)
  ]);
}