import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import repository from './model/repository'

ReactDOM.render(
  <App repository={repository} />,
  document.getElementById('root')
)
