import React from 'react'

export default class TodoList extends React.Component {
  render () {
    const elements = this.props.todos.map((todo, index) => {
      return <li key={index} className='list-group-item'>{todo}</li>
    })

    return (
      <ul className='list-group'>
        {elements}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.string)
}

TodoList.defaultProps = {
  todos: []
}
