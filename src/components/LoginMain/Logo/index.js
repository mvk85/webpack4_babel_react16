import React from 'react';
import styled from 'styled-components';
import logo from '../../../images/logo.svg';
import './assets/styles.scss';

const Img = styled.img`
  width: 300px;
  height: 144px;
`;

export default class LoginMain extends React.Component {
  render() {
    return (
      <div>
        <Img src={logo} alt="logo"/>
      </div>
    )
  }
}