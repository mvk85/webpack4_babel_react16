import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {
  fetchWalletSuccess,
  fetchWalletRequest,
  fetchWalletFailure
} from '../../actions/wallet';
import {
  buyCurrencySuccess,
  sellCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyFailure,
  buyCurrencyRequest,
  sellCurrencyRequest,
} from '../../actions/currency';

const isLoading = handleActions(
  {
    [fetchWalletRequest]: () => true,
    [fetchWalletSuccess]: () => false,
    [fetchWalletFailure]: () => false,
  },
  false,
);

const coins = handleActions(
  {
    [fetchWalletSuccess]: (state, action) => ({...state, ...action.payload}),
    [buyCurrencySuccess]: (state, {payload: {usd, btc, eth}}) => ({...state, usd, btc, eth}),
    [sellCurrencySuccess]: (state, {payload: {usd, btc, eth}}) => ({...state, usd, btc, eth}),
  },
  {usd: 0, btc: 0, eth: 0},
);

const error = handleActions(
  {
    [buyCurrencyFailure]: (state, action) => action.payload,
    [sellCurrencyFailure]: (state, action) => action.payload,
    [buyCurrencyRequest]: () => null,
    [sellCurrencyRequest]: () => null,
  },
  null,
);

export default combineReducers({isLoading, coins, error});

export const getWallet = state => state.wallet.coins;
export const getIsLoading = state => state.wallet.isLoading;
