import React from 'react'
import Header from './Header'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import store from '../flux/store'
import actions from '../flux/actions'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      list: store.list()
    }
  }

  listener () {
    this.setState({
      list: store.list()
    })
  }

  componentDidMount () {
    store.addChangeListener(() => this.listener())
  }

  componentWillUnmount () {
    store.removeChangeListener(() => this.listener())
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <div className='jumbotron text-center'>
          <TodoForm onAdd={todo => actions.add(todo)} />
          <TodoList
            todos={this.state.list}
            onTodoClick={index => actions.markAsDone(index)}
            onDeleteTodo={index => actions.remove(index)} />
        </div>
      </div>
    )
  }
}
