import React from 'react'
import Header from './Header'

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      currentTodo: '',
      list: []
    }
  }

  onAdd () {
    this.setState({
      currentTodo: '',
      list: this.props.repository.store(this.state.currentTodo)
    })
  }

  handleChange (event) {
    this.setState({
      currentTodo: event.target.value
    })
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <div className='jumbotron text-center'>
          <form>
            <div className='form-group'>
              <input className='form-control' placeholder='Add your todo...' value={this.state.currentTodo} onChange={(event) => this.handleChange(event)} />
            </div>
          </form>
          <p><button onClick={() => this.onAdd()} className='btn btn-lg btn-success' href='#' role='button'>Add</button></p>
          {this.state.list.length}
        </div>
      </div>
    )
  }
}
