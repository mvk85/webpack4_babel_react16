import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchBtcFailure,
  fetchBtcSuccess,
  fetchEthFailure,
  fetchEthSuccess, selectBtc, selectEth,
  selectOffset
} from '../../actions/currency';

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


export const getOffset = state => state.currency.offset;

export default combineReducers({
  offset,git
  btc,
  eth,
  selected
});