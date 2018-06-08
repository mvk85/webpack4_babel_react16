import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Switch } from 'react-router-dom';
import PrivateRouter from '../PrivateRoute';
import CryptoPage from '../CryptoPage';
import Header from '../Header';
import Footer from '../Footer';
import {
  MainContent,
  MainWrapper
} from "./styled";
import './styles/App.scss';
import './styles/normalize.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainWrapper>
          <MainContent>
            <Switch>
              <PrivateRouter path="/crypto/:cy" component={CryptoPage} />
            </Switch>
          </MainContent>
        </MainWrapper>
        <Footer />
      </Fragment>
    )
  }
}

// export default hot(module)(App);
export default App;