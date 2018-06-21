import {takeLatest, put, call, fork} from 'redux-saga/effects';
import {
  sellCurrencyRequest,
  sellCurrencySuccess,
  sellCurrencyFailure,
  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure,
} from '../../actions/currency';
import Notifications from 'react-notification-system-redux';
import {sellCurrency, buyCurrency} from '../../api/requests';
import { getNotificationError } from '../../api/notifications';

const NOT_ENOUGH = 'not_enough';

function* sellFlow(action) {
  try {
    const { currencyName, value } = action.payload;
    const response = yield call(sellCurrency, currencyName, value);

    yield put(sellCurrencySuccess(response.data));
  } catch (error) {
    console.error('error sell = ', error);
    if (error === NOT_ENOUGH) {
      yield put(Notifications.warning(getNotificationError('Не достаточно средств для продажи')));
    } else {
      yield put(Notifications.error(getNotificationError('Произошла ошибка при покупке')));
    }

    yield put(sellCurrencyFailure(error));
  }
}
function* buyFlow(action) {
  try {
    const { currencyName, value } = action.payload;
    const response = yield call(buyCurrency, currencyName, value);

    yield put(buyCurrencySuccess(response.data));
  } catch (error) {
    if (error === NOT_ENOUGH) {
      yield put(Notifications.warning(getNotificationError('Не достаточно средств для покупки')));
    } else {
      yield put(Notifications.error(getNotificationError('Произошла ошибка при продаже')));
    }

    yield put(buyCurrencyFailure(error));
  }
}

export function* sellCurrencyRequestWatch() {
  yield takeLatest(sellCurrencyRequest, sellFlow);
}

export function* buyCurrencyRequestWatch() {
  yield takeLatest(buyCurrencyRequest, buyFlow);
}

export default [
  fork(sellCurrencyRequestWatch),
  fork(buyCurrencyRequestWatch)
]