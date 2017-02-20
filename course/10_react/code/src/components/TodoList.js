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
          onClick={() => this.props.onTodoClick(index)}>
          <h4>{todo.message}</h4>
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
  onTodoClick: React.PropTypes.func
}

TodoList.defaultProps = {
  todos: [],
  onTodoClick: () => {}
}
