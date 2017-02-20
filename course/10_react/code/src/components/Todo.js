import React from 'react'

export default props => {
  const {todo, index, onDeleteTodo, onTodoClick} = props

  const textStyle = {
    textDecoration: todo.done ? 'line-through' : 'none'
  }

  const currentOnTodoCLick = () => onTodoClick(index)
  const currentOnDeleteTodo = event => {
    event.stopPropagation()
    onDeleteTodo(index)
  }
  return (
    <li
      style={textStyle}
      className='list-group-item'
      onClick={currentOnTodoCLick}>
      <span>{todo.message}</span>
      <span className='glyphicon glyphicon-trash pull-right' aria-hidden='true' onClick={currentOnDeleteTodo} />
    </li>
  )
}
