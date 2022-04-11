import React from 'react'

import Todo from './Todo';
export default class TodoList extends React.Component {
  constructor() {
    super();
    console.log(this)
  }

  render() {
    return (
      <div>
        <h2>TodoList</h2>
        {this.props.todos.map(todo => <Todo key={todo.id} todo={todo} />)}
      </div>
    )
  }
}
