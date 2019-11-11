import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Configs from './Configs';
import { store } from './redux/store'

global.config = new Configs();

const rootComponent = (
  <Provider store={store}>
    <Router basename={"/sso"}>
      <App />
    </Router>
  </Provider>
)

ReactDOM.render(rootComponent, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
