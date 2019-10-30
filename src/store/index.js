import { createStore } from 'redux'

import { authenticate } from '../reducers'

const initialState = {
  user: {
    userId: '',
    token: '',
    apps: []
  }
}



export const store = createStore(authenticate, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())