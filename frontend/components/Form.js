import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      todoName: ''
    };
  }

  handleChanges = e => {
    this.setState({
      todoName: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todoName);
    this.setState({ todoName: '' });
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={ this.handleSubmit }>
          <label>
            <p>Todo</p>
            <input 
              placeholder="Type new todo here" 
              type="text"
              name="todoName"
              value={ this.state.todoName }
              onChange={ this.handleChanges }
            />
          </label>
          <button>Submit Todo</button>
          <div>
            <button>Clear Completed Todos</button>
          </div>
        </form>
      </div>
    )
  }
}
