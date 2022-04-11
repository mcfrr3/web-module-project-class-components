import React from 'react'

import TodoList from './TodoList';
import Form from './Form';

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286, // could look different, you could use a timestamp to generate it
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos
    }
  }

  toggleItem = (itemId) => {

  }

  addItem = (e, item) => {

  }

  clearTodos = () => {
    
  }

  render() {
    return (
      <div>
        <Form />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
