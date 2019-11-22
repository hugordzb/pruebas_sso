import React from 'react';
import Home from './views/Home';
import { Switch, Route } from "react-router-dom";
import Greeting from './views/Greeting';
import Login from './views/SignIn';
import Whoops404 from './views/Whoops404';
import PrivateRoute from './components/PrivateRoute';
import { connect } from 'react-redux';
import PublicRoute from './components/PublicRoute';

class App extends React.Component {
  
  render() {
    return (
      <Switch>
        <PublicRoute exact path="/" restricted={true} component={Greeting}></PublicRoute>
        <PublicRoute restricted={true} path="/login" component={Login}></PublicRoute>
        <PrivateRoute path="/home" component={Home}></PrivateRoute>
        <Route component={Whoops404}></Route>
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  userData: state.authentication.userData,
  isAuthenticated: state.authentication.isAuthenticated,
});

export default connect(mapStateToProps, null)(App);