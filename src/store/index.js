import { createStore } from 'redux'

import { authenticate } from '../reducers'


const initialState = {
  user: {
    userId: '',
    isAuthenticated: false,
    token: '',
    apps: [],
    authenticate: () => (this.userId && this.token) ? true : false
  }
}

export const store = createStore(authenticate, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())