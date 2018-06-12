import { createActions } from 'redux-actions';

export const {
  currency: {
    selectBtc,
    selectEth,
    selectOffset,
    fetchBtcRequest,
    fetchBtcSuccess,
    fetchBtcFailure,
    fetchEthRequest,
    fetchEthSuccess,
    fetchEthFailure,
    buyCurrencyRequest,
    buyCurrencySuccess,
    buyCurrencyFailure,
    sellCurrencyRequest,
    sellCurrencySuccess,
    sellCurrencyFailure,
  },
} = createActions({
  CURRENCY: {
    SELECT_BTC: undefined,
    SELECT_ETH: undefined,
    SELECT_OFFSET: undefined,
    FETCH_BTC_REQUEST: undefined,
    FETCH_BTC_SUCCESS: undefined,
    FETCH_BTC_FAILURE: undefined,
    FETCH_ETH_REQUEST: undefined,
    FETCH_ETH_SUCCESS: undefined,
    FETCH_ETH_FAILURE: undefined,
    BUY_CURRENCY_REQUEST: undefined,
    BUY_CURRENCY_SUCCESS: undefined,
    BUY_CURRENCY_FAILURE: undefined,
    SELL_CURRENCY_REQUEST: undefined,
    SELL_CURRENCY_SUCCESS: undefined,
    SELL_CURRENCY_FAILURE: undefined,
  },
});