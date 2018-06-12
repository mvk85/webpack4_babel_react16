import React from 'react';
import styled from 'styled-components';
import { ButtomInfo, ButtomCaution } from '../../App/styled';

export const BlockPayPal = styled.div`
  padding-top: 35px;
`;
export const ItemPayPal = styled.div`
  // background-color: #f2f2f2;
  width: 100%;
  color: #fff;
  margin-bottom: 15px;
`;
export const ItemPayPalInput = styled.span`
  background-color: #f1f1f1;
  border-radius: 4px;
  color: #ccc;
  width: 150px;
  display: inline-block;
  margin-right: 15px;
  padding: 9px 9px 9px 15px;
  font-size: 14px;
`;
export const NumberPayPal = styled.span`
  display: inline-block;
  width: 70%;
  color: #000;
`;
export const DesPayPal = styled.span`
  display: inline-block;
  width: 30%;
  text-align: right;
`;


class PayPal extends React.PureComponent {
  render() {
    return (
      <BlockPayPal>
        <h3>Покупка/продажа</h3>
        <ItemPayPal>
          <ItemPayPalInput>
            <NumberPayPal>0.1</NumberPayPal>
            <DesPayPal>BTC</DesPayPal>
          </ItemPayPalInput>
        </ItemPayPal>
        <ItemPayPal>
          <ItemPayPalInput>
            <NumberPayPal>0.1</NumberPayPal>
            <DesPayPal>$</DesPayPal>
          </ItemPayPalInput>
          <ButtomInfo>
            Продать
          </ButtomInfo>
        </ItemPayPal>
        <ItemPayPal>
          <ItemPayPalInput>
            <NumberPayPal>0.1</NumberPayPal>
            <DesPayPal>$</DesPayPal>
          </ItemPayPalInput>
          <ButtomCaution>
            Купить
          </ButtomCaution>
        </ItemPayPal>
      </BlockPayPal> 
    );
  }
}

export default PayPal;