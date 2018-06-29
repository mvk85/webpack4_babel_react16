import {call, takeLatest, put, take, select, fork} from 'redux-saga/effects';
import {getIsAuthorized} from '../../reducers/auth';
import {clearTokenApi, getToken, setTokenApi, registration} from '../../api/requests';
import {
  loginRequest,
  registrationFailure,
  registrationRequest,
  loginFailure,
  loginSuccess,
  logout,
  registrationSuccess
} from '../../actions/auth/index';
import {getTokenFromLocalStorage, removeTokenFromLocalStorage, setTokenToLocalStorage} from '../../api/localStorage';
import {fetchWalletRequest} from '../../actions/wallet';

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
    yield put(fetchWalletRequest());

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
  } catch (error) {
    yield put(loginFailure(error.data.message));
  }
}

export function* registrationUserWorker(action) {
  try {
    const result = yield call(registration, action.payload);
    yield put(registrationSuccess(result.data.jwt));
  } catch (error) {
    const errorMessage = Object.keys(error.data.message).map(key => `${key}: ${error.data.message[key]}`).join(', ');
    yield put(registrationFailure(errorMessage));
  }
}

export function* authUserWatcher() {
  yield takeLatest(loginRequest, authUserWorker);
}

export function* registrationRequestWatch() {
  yield takeLatest(registrationRequest, registrationUserWorker);
}

export default [
  fork(authUserWatcher),
  fork(authFlow),
  fork(registrationRequestWatch)
];
