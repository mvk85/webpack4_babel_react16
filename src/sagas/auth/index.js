import { call, takeLatest } from 'redux-saga/effects';
import {loginRequest} from "../../actions/auth/index";
import {getIsAuthorized} from "../../reducers/auth/index";

export function* authUserWorker() {
  try {
    const isAuthorized = call(getIsAuthorized);
    console.log('saga authUserWorker isAuthorized = ', isAuthorized);
  } catch (error) {
    console.error('authUserWorker: ', error);
  }
}

export function* authUserWatcher() {
  yield takeLatest(loginRequest, authUserWorker);
}