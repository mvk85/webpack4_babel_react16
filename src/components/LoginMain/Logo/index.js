import React from 'react';
import logo from '../../../images/logo.svg';
import './assets/styles.scss';

export default class LoginMain extends React.Component {
  render() {
    return (
      <div className="logo-main">
        <img src={logo} alt="logo"/>
      </div>
    )
  }
}