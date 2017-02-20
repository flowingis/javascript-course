import React from 'react'

export default class TodoList extends React.Component {
  render () {
    const elements = this.props.todos.map((todo, index) => {
      const textStyle = {
        textDecoration: todo.done ? 'line-through' : 'none'
      }

      return (
        <li
          key={index}
          style={textStyle}
          className='list-group-item'
          onClick={(event) => {
            event.preventDefault()
            this.props.onTodoClick(index)
          }}>
          <span>{todo.message}</span>
          <span className='glyphicon glyphicon-trash pull-right' aria-hidden='true' onClick={(event) => {
            event.stopPropagation()
            this.props.onDeleteTodo(index)
          }} />
        </li>
      )
    })

    return (
      <ul className='list-group'>
        {elements}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object),
  onTodoClick: React.PropTypes.func,
  onDeleteTodo: React.PropTypes.func
}

TodoList.defaultProps = {
  todos: [],
  onTodoClick: () => {},
  onDeleteTodo: () => {}
}
