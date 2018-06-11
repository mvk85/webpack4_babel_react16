import React from 'react';
import { LogoWrapper } from './styled';
import logo from '../../../images/logo-bl.svg';

export class Logo extends React.Component {
  state = {};

  render() {
    return (
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
    );
  }
}

export default Logo;