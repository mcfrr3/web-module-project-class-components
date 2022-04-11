import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { todo } = this.props;
    return (
      <div onClick={ () => this.props.toggleTodo(todo.id) }>
        <p>{ todo.name } { todo.completed ? '✔️' : '' }</p>
      </div>
    )
  }
}
