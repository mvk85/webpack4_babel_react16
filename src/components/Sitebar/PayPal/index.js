import React from 'react';
import styled from 'styled-components';
import { ButtomInfo } from '../../App/styled';

export const BlockPayPal = styled.div`
  padding-top: 35px;
`;
export const ItemPayPal = styled.div`
  // background-color: #f2f2f2;
  width: 100%;
  color: #fff;
  margin-bottom: 10px;
`;
export const ItemPayPalInput = styled.span`
  background-color: #f1f1f1;
  border-radius: 4px;
  color: #ccc;
  width: 80px;
  display: inline-block;
  margin-right: 15px;
  padding: 5px;
  font-size: 12px;
`;

class PayPal extends React.PureComponent {
  render() {
    return (
      <BlockPayPal>
        <h3>Покупка/продажа</h3>
        <ItemPayPal>
          <ItemPayPalInput>
            0.1 BTC
          </ItemPayPalInput>
        </ItemPayPal>
        <ItemPayPal>
          <ItemPayPalInput>
            0.1 BTC
          </ItemPayPalInput>
          <ButtomInfo>
            Купить
          </ButtomInfo>
        </ItemPayPal>
        <ItemPayPal>
          <ItemPayPalInput>
            0.1 BTC
          </ItemPayPalInput>
          <ButtomInfo>
            Купить
          </ButtomInfo>
        </ItemPayPal>
      </BlockPayPal> 
    );
  }
}

export default PayPal;