import React from 'react';
import { hot } from 'react-hot-loader';
import LoginMain from '../LoginMain';
import styled from 'styled-components'
import './styles/App.scss';
import './styles/normalize.css';

const Main = styled.main`
    background-color: #f5f5f6;
    height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <Main>
        <LoginMain />
      </Main>
    )
  }
}

export default hot(module)(App);