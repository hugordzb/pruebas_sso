import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

class PrivateRoute extends Component {
  
  render() {
    const { children, ...rest } = this.props
    return (
      <Route
      {...rest}
      render={({ location }) =>
        
      .isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
  }
}

export default PrivateRoute;