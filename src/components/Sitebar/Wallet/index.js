import React from 'react';
import styled from 'styled-components';

export const BlockWallet = styled.div`
  
`;
export const ItemWallet = styled.div`
`;
export const ItemWalletInput = styled.span`
  width: 225px;
  background-color: #404243;
  text-align: center;
  color: #fff;
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
    return (
      <BlockWallet>
        <h3>Ваш счёт</h3>
        <ItemWallet>
          <ItemWalletInput><b>123</b>.00123</ItemWalletInput>
          <span>ETH</span>
        </ItemWallet>
        <ItemWallet>
          <ItemWalletInput><b>123</b>.00123</ItemWalletInput>
          <span>BTC</span>
        </ItemWallet>
        <ItemWallet>
          <ItemWalletInput><b>123</b>.00123</ItemWalletInput>
          <span>$</span>
        </ItemWallet>
      </BlockWallet>       
    );
  }
}

export default Wallet;