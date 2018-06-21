import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Notifications from 'react-notification-system-redux';
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
import { styleNotification } from '../../api/notifications';

class App extends React.Component {
  render() {
    const { notifications } = this.props;

    return (
      <Fragment>
        <Header />
        <MainWrapper>
          <MainContent>
            <Switch>
              <PrivateRouter path="/crypto/:currency" component={CryptoPage} />
            </Switch>
          </MainContent>
        </MainWrapper>
        <Footer />
        <Notifications
          notifications={notifications}
          style={styleNotification}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default hot(module)(connect(mapStateToProps)(App));