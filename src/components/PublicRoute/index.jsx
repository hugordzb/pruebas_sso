import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PublicRoute extends Component{
  render() {
    const { isAuthenticated } = this.props;
    const { component:Component, restricted, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={ () =>
          (isAuthenticated && restricted) ? (
            <Redirect
              to={{
                pathname: "/home",
                state: { from: this.props.location }
              }}
            />
          ) : (
            <Component {...this.props} />
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

export default connect(mapStateToProps, null)(PublicRoute);