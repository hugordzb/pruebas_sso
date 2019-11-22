import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component{
  render() {
    const { isAuthenticated } = this.props;
    const { component:Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={ () =>
          isAuthenticated ? (
            <Component {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: this.props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  userData: state.authentication.userData,
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps, null)(PrivateRoute);