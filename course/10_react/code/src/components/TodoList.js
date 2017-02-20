import React from 'react'

import Todo from './Todo'

export default class TodoList extends React.Component {
  render () {
    const elements = this.props.todos.map((todo, index) => (
      <Todo
        key={index}
        index={index}
        todo={todo}
        {...this.props} />
    ))

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
