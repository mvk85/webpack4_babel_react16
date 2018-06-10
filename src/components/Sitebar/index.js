import React from 'react';
import styled from 'styled-components';

export const WrapperSitebar = styled.div`
  padding-right: 30px;
`;
export const BlockWallet = styled.div`
  
`
export const ItemWallet = styled.div`
  input {
    width: 100px;
    background-color: #404243;
    text-align: center;
  }
`;
export const BlockPayPal = styled.div`
  padding-top: 35px;
`
export const ItemPayPal = styled.div`
  input{
    background-color: #f2f2f2;
    width: 50px;
    color: #fff;
  }
`
class Sitebar extends React.PureComponent {
  render() {
    return (
      <WrapperSitebar>
        <BlockWallet>
          <h3>Ваш счёт</h3>
          <ItemWallet>
            123
          </ItemWallet>
          <ItemWallet>
            123
          </ItemWallet>
          <ItemWallet>
            123
          </ItemWallet>
        </BlockWallet>
        <BlockPayPal>
          <h3>Покупка/продажа</h3>
          <ItemPayPal>
            123
          </ItemPayPal>
          <ItemPayPal>
            123
          </ItemPayPal>
          <ItemPayPal>
            123
          </ItemPayPal>
        </BlockPayPal>
      </WrapperSitebar>
    );
  }
}

export default Sitebar;