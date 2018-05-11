import React from 'react';
import Logo from './Logo';
import AuthForm from '../AuthForm';
import Reg from './Registration';

export default class LoginMain extends React.Component {
  render() {
    return (
      <div className="main-login">
        <Logo />
        <AuthForm />
        <Reg />
      </div>
    )
  }
}