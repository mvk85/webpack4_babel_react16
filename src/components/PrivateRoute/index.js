import React, {PureComponent} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorized} from '../../reducers/auth';

class PrivateRoute extends PureComponent {
  render() {
    const {isAuthorized, component: Component, ...rest} = this.props;

    // console.log('handleRender props = ', this.props);

    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" state={{from: this.props.location}} />
          )
        }
      />
    );
  }
}

export default connect(state => ({
  isAuthorized: getIsAuthorized(state),
}))(PrivateRoute);


/*
import React, {PureComponent} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorized} from '../../reducers/auth';

class PrivateRoute extends PureComponent {
  handleRender = props => {
    const {isAuthorized, component: Component} = this.props;

    console.log('handleRender props = ', this.props);

    if (isAuthorized) {
      return <Component {...props} />
    }

     return <Redirect to="/" state={{from: this.props.location}} />;
  };

  render() {
    return (
      <Route
        {...this.props}
        render={this.handleRender}
      />
    );
  }
}

export default connect(state => ({
  isAuthorized: getIsAuthorized(state),
}))(PrivateRoute);
*/

