import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
//import ReduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  //composeEnhancers(applyMiddleware(ReduxPromise))
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />>
  </Provider>,
  document.getElementById('root')
)
