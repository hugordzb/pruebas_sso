import { createStore } from 'redux'

const reducers = state => state

export const store = createStore( reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__())