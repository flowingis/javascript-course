import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import actions from '../redux/actions'

const App = props => (
  <div className='container'>
    <Header loading={props.loading} />
    <div className='jumbotron text-center'>
      <TodoForm onAdd={todo => props.dispatch(actions.add(todo))} />
      <TodoList
        todos={props.list}
        onTodoClick={index => props.dispatch(actions.markAsDone(index))}
        onDeleteTodo={index => props.dispatch(actions.remove(index))} />
    </div>
  </div>
)

export default connect(state => {
  return {
    list: state.todos,
    loading: state.loading
  }
})(App)
