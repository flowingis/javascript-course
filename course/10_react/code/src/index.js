import React from 'react'
import ReactDOM from 'react-dom'
import { autorun } from 'mobx'

import App from './components/App'
import AppState from './model/AppState'
import repositoryFactory from './model/repository'

const state = new AppState()
const repository = repositoryFactory(state)

autorun(() => {
  console.log('Total number of todos: ' + state.todoNumber)
})

ReactDOM.render(
  <App state={state} repository={repository} />,
  document.getElementById('root')
)
