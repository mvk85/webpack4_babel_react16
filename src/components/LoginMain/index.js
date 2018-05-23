import React from 'react';
import Particles from 'react-particles-js';

import particlesConfig from './particles-params';
import Logo from './Logo';
import AuthForm from './AuthForm';
import Reg from './Registration';
import {
  WrapperLogo,
  ContainerLogo
} from "./styled";

export default class LoginMain extends React.Component {
  render() {
    return (
      <React.Fragment>
        <WrapperLogo>
          <ContainerLogo>
            <Logo/>
            <AuthForm/>
            <Reg/>
          </ContainerLogo>
        </WrapperLogo>
        <Particles params={particlesConfig} height="100vh" />
      </React.Fragment>
    )
  }
}