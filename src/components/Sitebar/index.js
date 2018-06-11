import React from 'react';
import styled from 'styled-components';
import Wallet from './Wallet';
import PayPal from './PayPal';

export const WrapperSitebar = styled.div`
  padding-right: 30px;
`;

class Sitebar extends React.PureComponent {
  render() {
    return (
      <WrapperSitebar>
        <Wallet />
        <PayPal />
      </WrapperSitebar>
    );
  }
}

export default Sitebar;