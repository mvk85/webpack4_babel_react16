import {takeLatest, fork, put, call} from 'redux-saga/effects';
import {fetchWalletRequest, fetchWalletSuccess, fetchWalletFailure} from '../../actions/wallet';
import {getWallet} from "../../api/requests";

function* fetchWalletFlow() {
  try {
    const response = yield call(getWallet);
    yield put(fetchWalletSuccess(response.data.result));
  } catch (error) {
    yield put(fetchWalletFailure(error));
  }
}

export function* fetchWalletWatch() {
  yield takeLatest(fetchWalletRequest, fetchWalletFlow);
}
export default [
  fork(fetchWalletWatch),
];
