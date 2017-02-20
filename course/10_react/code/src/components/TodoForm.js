import React from 'react'

export default class TodoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTodo: ''
    }
  }

  onAdd () {
    this.props.onAdd(this.state.currentTodo)
    this.setState({
      currentTodo: ''
    })
  }

  handleChange (event) {
    this.setState({
      currentTodo: event.target.value
    })
  }

  render () {
    return (
      <form>
        <div className='form-group'>
          <input className='form-control' placeholder='Add your todo...' value={this.state.currentTodo} onChange={(event) => this.handleChange(event)} />
        </div>
        <p>
          <button type='button' onClick={() => this.onAdd()} className='btn btn-lg btn-success'role='button'>Add</button>
        </p>
      </form>
    )
  }
}

TodoForm.propTypes = {
  onAdd: React.PropTypes.func.isRequired
}

