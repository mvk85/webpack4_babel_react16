import React from 'react';
import Wallet from './Wallet';
import PayPal from './PayPal';
import { WrapperSitebar } from './styled';

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