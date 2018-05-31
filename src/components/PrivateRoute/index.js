import React, {PureComponent} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorized} from '../../reducers/auth';

class PrivateRoute extends PureComponent {
  handleRender = props => {
    const {isAuthorized, component: Component} = this.props;

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
