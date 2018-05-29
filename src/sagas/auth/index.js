import { call, takeLatest, put, take, select } from 'redux-saga/effects';
import {loginRequest} from "../../actions/auth";
import {getIsAuthorized} from "../../reducers/auth";
import {clearTokenApi, getToken, setTokenApi} from "../../api/request";
import {loginFailure, loginSuccess, logout, registrationSuccess} from "../../actions/auth/index";
import {getTokenFromLocalStorage, removeTokenFromLocalStorage, setTokenToLocalStorage} from "../../api/localStorage";

export function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    let token;

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;
      } else {
        const action = yield take([loginSuccess, registrationSuccess]);
        token = action.payload;
      }
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield put(loginSuccess());
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}

export function* authUserWorker(action) {
  try {
    const responseLogin = yield call(getToken, action.payload);
    const token = responseLogin.data.jwt;
    yield put(loginSuccess(token));
    console.log('token =  ', token);
  } catch (error) {
    yield put(loginFailure(error.data.message));
    console.error('authUserWorker: ', error);
  }
}

export function* authUserWatcher() {
  yield takeLatest(loginRequest, authUserWorker);
}