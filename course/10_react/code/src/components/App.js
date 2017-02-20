import React from 'react'
import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  onTodoAdd (todo) {
    this.setState({
      list: this.props.repository.store(todo)
    })
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <div className='jumbotron text-center'>
          <TodoForm onAdd={todo => this.onTodoAdd(todo)} />
          <TodoList todos={this.state.list} />
        </div>
      </div>
    )
  }
}
