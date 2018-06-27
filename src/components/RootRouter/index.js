import React, {PureComponent} from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import LoginMain from '../LoginMain';
import App from '../App';
import PrivateRoute from '../PrivateRoute';

class RootRouter extends PureComponent {
  render() {

    return (
      <Switch>
        <Route path="/" exact component={LoginMain} />
        <PrivateRoute path="*" component={App} />
      </Switch>
    );
  }
}

export default withRouter(RootRouter);
