import { all, fork } from 'redux-saga/effects';
import {authUserWatcher} from "./auth/index";

export default function* () {
  yield all([
    fork(authUserWatcher)
  ]);
}