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
  state = {
    isAuth: true
  };

  handleAuth = (isAuth) => { this.setState({ isAuth }) };

  render() {
    const { isAuth } = this.state;

    return (
      <React.Fragment>
        <WrapperLogo>
          <ContainerLogo>
            <Logo/>
            <AuthForm
              isAuth={isAuth}
            />
            <Reg
              isAuth={isAuth}
              handleAuth={this.handleAuth}
            />
          </ContainerLogo>
        </WrapperLogo>
        <Particles params={particlesConfig} />
      </React.Fragment>
    )
  }
}