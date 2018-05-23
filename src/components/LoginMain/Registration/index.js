import React from 'react';
import { ContainerForm, WrapperForm } from "../AuthForm/styled";
import { CheckBlock } from "../styled";

export default class LoginMain extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    console.log('login');
  };

  handleRegistration = (e) => {
    e.preventDefault();
    console.log('registration');
  };

  render() {
    const isLogin = true;
    let contentCheck = null;

    if (isLogin) {
      contentCheck = (
        <CheckBlock>
          Уже зарегистрированы?{' '}
          <a href="" onClick={this.handleLogin}>Войти</a>
        </CheckBlock>
      )
    } else {
      contentCheck = (
        <CheckBlock>
          Впервые на сайте?{' '}
          <a href="" onClick={this.handleRegistration}>Регистрация</a>
        </CheckBlock>
      )
    }

    return (
      <WrapperForm>
        {contentCheck}
      </WrapperForm>
    )
  }
}