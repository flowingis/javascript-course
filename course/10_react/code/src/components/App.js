import React from 'react'
import { observer } from 'mobx-react'
import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default observer(props => {
  const { state, repository } = props

  return (
    <div className='container'>
      <Header loading={state.loading} />
      <div className='jumbotron text-center'>
        <TodoForm onAdd={todo => repository.store(todo)} />
        <TodoList
          todos={[...state.todos]}
          onTodoClick={index => repository.markAsDone(index)}
          onDeleteTodo={index => repository.remove(index)} />
      </div>
    </div>
  )
})
