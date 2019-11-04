import React from 'react'
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import Greeting from './views/Greeting'
import Login from './views/Login'
import NavBar from './components/NavBar'

class App extends React.Component {
  render() {
    return (
      <Router>
        <CssBaseline />
        <header>
          <NavBar />
        </header>

        <main>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/" component={Greeting}></Route>

          <Switch>

          </Switch>
        </main>

        <footer>

        </footer>
      </Router>
    )
  }
}

export default App