import React, {PureComponent} from 'react';
import LoginMain from '../LoginMain';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import App from '../App';
import PrivateRoute from '../PrivateRoute';

class RootRouter extends PureComponent {
  render() {

    return (
      <Switch>
        <Route path="/" exact component={LoginMain} />
        <PrivateRoute path="*" component={App} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default withRouter(RootRouter);
