import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';
import { getIsLoading } from '../../../reducers/wallet';
import { getWallet } from '../../../reducers/wallet/index';
import { getChunkNumber } from '../../../api/functions';
import { ItemWalletInput } from './styled';

class Wallet extends React.PureComponent {
  render() {
    const {
      wallet: { usd, btc, eth },
      isLoading
    } = this.props;

    const mapWallet = [
      { title: 'ETH', chunk: getChunkNumber(eth) },
      { title: 'BTC', chunk: getChunkNumber(btc) },
      { title: '$', chunk: getChunkNumber(usd) }
    ];

    return (
      <div>
        <h3>Ваш счёт</h3>
        {isLoading && <Spinner  size="32px" />}
        {!isLoading && mapWallet.map(({title, chunk}, index) => (
          <div key={index}>
            <ItemWalletInput><b>{chunk[0]}</b>{chunk[1] ? '.' + chunk[1] : ''}</ItemWalletInput>
            <span>{title}</span>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wallet: getWallet(state),
  isLoading: getIsLoading(state)
});

export default connect(mapStateToProps)(Wallet);