import { call, takeLatest } from 'redux-saga/effects';
import { loginRequest, registrationFailure, registrationRequest, registrationSuccess } from '../../actions/auth';
import {getIsAuthorized} from "../../reducers/auth";
import { registration } from '../../api/requests';

export function* authUserWorker() {
  try {
    const isAuthorized = yield call(getIsAuthorized);
    console.log('saga authUserWorker isAuthorized = ', isAuthorized);
  } catch (error) {
    console.error('authUserWorker: ', error);
  }
}

function* registrationFlow(action) {
  try {
    console.log('registrationFlow action = ', action);
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
  yield takeLatest(registrationRequest, registrationFlow);
}

