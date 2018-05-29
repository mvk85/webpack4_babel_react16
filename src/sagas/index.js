import { all, fork } from 'redux-saga/effects';
import {authUserWatcher, authFlow} from "./auth/index";

export default function* () {
  yield all([
    fork(authUserWatcher),
    fork(authFlow)
  ]);
}