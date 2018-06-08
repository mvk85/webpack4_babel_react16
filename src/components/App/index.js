import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import PrivateRouter from '../PrivateRoute';
import CryptoPage from '../CryptoPage';
import {
  HeaderWrapper,
  HeaderContent,
  MainContent,
  MainWrapper,
  Footer
} from "./styled";
import './styles/App.scss';
import './styles/normalize.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <HeaderWrapper>
          <HeaderContent>
            <div>Header</div>
          </HeaderContent>
        </HeaderWrapper>
        <MainWrapper>
          <MainContent>
            <Switch>
              <Route path="/crypto/:cy" component={CryptoPage} />
            </Switch>
          </MainContent>
        </MainWrapper>
        <Footer>
          <div>Footer</div>
        </Footer>
      </Fragment>
    )
  }
}

// export default hot(module)(App);
export default App;