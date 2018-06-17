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
} from './styled';
import {getIsAuthorized} from "../../reducers/auth/index";

export class LoginMain extends React.Component {
  state = {
    isAuth: true
  };

  handleAuth = (isAuth) => { this.setState({ isAuth }) };

  render() {
    const { isAuthorized } = this.props;
    const { isAuth } = this.state;

    if (isAuthorized) {
      return <Redirect to="crypto/btc" />;
    }

    return (
      <Main>
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
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default connect(mapStateToProps)(LoginMain);