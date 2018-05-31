import React from 'react';
import Particles from 'react-particles-js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import particlesConfig from './particles-params';
import Logo from './Logo';
import AuthForm from './AuthForm';
import Reg from './Registration';
import {
  WrapperLogo,
  ContainerLogo,
  Main
} from "./styled";
import {getIsAuthorized} from "../../reducers/auth/index";

export class LoginMain extends React.Component {
  render() {
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Redirect to="crypto/bit" />
    }

    return (
      <Main>
        <WrapperLogo>
          <ContainerLogo>
            <Logo/>
            <AuthForm/>
            <Reg/>
          </ContainerLogo>
        </WrapperLogo>
        <Particles params={particlesConfig} height="100vh" />
      </Main>
    )
  }
}

mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(LoginMain);