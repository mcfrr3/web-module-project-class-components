import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Form</h2>
        <form>
          <label>
            <p>Todo</p>
            <input 
              placeholder="Type new todo here" 
            />
          </label>
        </form>
      </div>
    )
  }
}
