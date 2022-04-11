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

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo;
        }
      })
    });
  }

  addItem = (e, item) => {

  }

  clearTodos = () => {

  }

  render() {
    return (
      <div>
        <Form />
        <TodoList 
          todos={ this.state.todos } 
          toggleTodo={ this.toggleTodo }
        />
      </div>
    )
  }
}
