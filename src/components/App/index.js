import React from 'react';
import { hot } from 'react-hot-loader';
import LoginMain from '../LoginMain';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <LoginMain />
      </div>
    )
  }
}

export default hot(module)(App);