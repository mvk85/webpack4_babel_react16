import React from 'react';
import styled from 'styled-components';

export const BlockWallet = styled.div`
  
`;
export const ItemWallet = styled.div`
  span {
    
  }
`;
export const ItemWalletInput = styled.span`
width: 150px;
background-color: #404243;
text-align: center;
padding-right: 15px;
color: #fff;
display: inline-block;
padding: 5px;
font-size: 12px;
border-radius: 4px;
margin-right: 15px;
margin-bottom: 10px;

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