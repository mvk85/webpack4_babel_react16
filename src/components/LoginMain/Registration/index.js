import React from 'react';
import { WrapperForm } from '../AuthForm/styled';
import { CheckBlock } from '../styled';

export default class Registration extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();

    this.props.handleAuth(true);
  };

  handleRegistration = (e) => {
    e.preventDefault();

    this.props.handleAuth(false);
  };

  render() {
    const { isAuth: isLogin } = this.props;
    let contentCheck = null;

    if (!isLogin) {
      contentCheck = (
        <CheckBlock>
          Уже зарегистрированы?{' '}
          <a href="" onClick={this.handleLogin}>Войти</a>
        </CheckBlock>
      );
    } else {
      contentCheck = (
        <CheckBlock>
          Впервые на сайте?{' '}
          <a href="" onClick={this.handleRegistration}>Регистрация</a>
        </CheckBlock>
      );
    }

    return (
      <WrapperForm>
        {contentCheck}
      </WrapperForm>
    );
  }
}