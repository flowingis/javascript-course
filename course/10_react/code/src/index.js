import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import App from './components/App'
import reducer from './redux/reducer'
import sagas from './redux/sagas'

const logger = createLogger({
  collapsed: true
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
