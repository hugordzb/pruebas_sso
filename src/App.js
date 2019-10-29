import React from 'react'
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends React.Component {
  render() {
    return (
      <Router>
        <CssBaseline />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App