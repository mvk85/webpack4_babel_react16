import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Spinner from 'react-svg-spinner';
import {getIsLoading} from "../../../reducers/wallet";
import {getWallet} from "../../../reducers/wallet/index";
import {getChunkNumber} from "../../../api/functions";

export const BlockWallet = styled.div`  
`;
export const ItemWallet = styled.div`
`;
export const ItemWalletInput = styled.span`
  width: 225px;
  background-color: #404243;
  text-align: center;
  display: inline-block;
  padding: 9px 15px 9px 9px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 15px;
  margin-bottom: 15px;
  color: #8a8a8a;
  b{
    color: #fff;
  }
`;

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
      <BlockWallet>
        <h3>Ваш счёт</h3>
        {isLoading && <Spinner  size="32px" />}
        {!isLoading && mapWallet.map(({title, chunk}, index) => (
          <ItemWallet key={index}>
            <ItemWalletInput><b>{chunk[0]}</b>{chunk[1] ? '.' + chunk[1] : ''}</ItemWalletInput>
            <span>{title}</span>
          </ItemWallet>
        ))}
      </BlockWallet>       
    );
  }
}

const mapStateToProps = state => ({
  wallet: getWallet(state),
  isLoading: getIsLoading(state)
});

export default connect(mapStateToProps)(Wallet);