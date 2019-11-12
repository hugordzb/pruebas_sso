import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PublicRoute extends Component{
  render() {
    const { component:Component, restricted, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={ () =>
          (this.props.isAuthenticated && restricted) ? (
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
  isAuthenticated: state.authenticate.isAuthenticated, 
});

export default connect(mapStateToProps, null)(PublicRoute);