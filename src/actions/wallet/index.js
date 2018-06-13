import { createActions } from 'redux-actions';

export const {
  wallet: {
    fetchWalletRequest,
    fetchWalletSuccess,
    fetchWalletFailure
  }
} = createActions({
  WALLET: {
    FETCH_WALLET_REQUEST: undefined,
    FETCH_WALLET_SUCCESS: undefined,
    FETCH_WALLET_FAILURE: undefined
  }
});