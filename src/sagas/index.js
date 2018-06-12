import { all } from 'redux-saga/effects';
// import { authUserWatcher, authFlow, registrationRequestWatch } from './auth/index';
import auth from './auth';

export default function* () {
  yield all([
    ...auth
  ]);
}