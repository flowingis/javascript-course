import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import AppState from './model/AppState'
import repositoryFactory from './model/repository'

const state = new AppState()
const repository = repositoryFactory(state)

ReactDOM.render(
  <App state={state} repository={repository} />,
  document.getElementById('root')
)
