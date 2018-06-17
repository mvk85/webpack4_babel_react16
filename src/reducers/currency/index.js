import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {createSelector} from 'reselect';
import moment from 'moment';
import {
  fetchBtcFailure,
  fetchBtcSuccess,
  fetchEthFailure,
  fetchEthSuccess, selectBtc, selectEth,
  selectOffset
} from '../../actions/currency';
import {fetchBtcRequest, fetchEthRequest} from "../../actions/currency/index";

const selected = handleActions({
  [selectBtc]: () => 'btc',
  [selectEth]: () => 'eth'
}, 'btc');

const offset = handleActions({
  [selectOffset]: (state, action) => action.payload
}, '4h');

const btc = handleActions({
  [fetchBtcSuccess]: (state, action) => action.payload,
  [fetchBtcFailure]: () => []
}, []);

const eth = handleActions({
  [fetchEthSuccess]: (state, action) => action.payload,
  [fetchEthFailure]: () => []
}, []);

const isBtcLoading = handleActions({
  [fetchBtcRequest]: () => true,
  [fetchBtcSuccess]: () => false,
  [fetchBtcFailure]: () => false,
}, false,);

const isEthLoading = handleActions({
  [fetchEthRequest]: () => true,
  [fetchEthSuccess]: () => false,
  [fetchEthFailure]: () => false,
}, false,);

export default combineReducers({
  offset,
  btc,
  eth,
  selected,
  isBtcLoading,
  isEthLoading
});

export const getOffset = state => state.currency.offset;
export const getSell = currency => (
  currency.reduce((result, {mts, sell}) => (
    [...result, {x: moment(mts).format('DD-MM HH:mm'), y: sell}]
  ), [])
);
export const getPurchase = currency => (
  currency.reduce((result, {mts, purchase}) => (
    [...result, {x: moment(mts).format('DD-MM HH:mm'), y: purchase}]
  ), [])
);
const getBtc = state => state.currency.btc;
const getEth = state => state.currency.eth;
export const getIsBtcLoading = state => state.currency.isBtcLoading;
export const getIsEthLoading = state => state.currency.isEthLoading;
export const getSelectedCurrency = state => state.currency.selected;

// selectors
export const getSellBtc = createSelector(getBtc, getSell);
export const getPurchaseBtc = createSelector(getBtc, getPurchase);
export const getSellEth = createSelector(getEth, getSell);
export const getPurchaseEth = createSelector(getEth, getPurchase);

export const getCurrentBtcSell = state => (state.currency.btc.length > 0 ? state.currency.btc[0].sell : 0);
export const getCurrentBtcPurchase = state => (state.currency.btc.length > 0 ? state.currency.btc[0].purchase : 0);
export const getCurrentEthSell = state => (state.currency.eth.length > 0 ? state.currency.eth[0].sell : 0);
export const getCurrentEthPurchase = state => (state.currency.eth.length > 0 ? state.currency.eth[0].purchase : 0);
