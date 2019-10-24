import React from 'react'
import SingIn from './components/SingIn'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <SingIn></SingIn>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App