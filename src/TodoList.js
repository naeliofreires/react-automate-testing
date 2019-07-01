import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    text: "",
    todos: []
  };

  handleInputChange = e => this.setState({ text: e.target.value });

  handleAddTodo = () =>
    this.setState({ todos: [...this.state.todos, this.state.text], text: "" });

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
          type="text"
          name="todo"
        />
        <button onClick={this.handleAddTodo}>adicionar</button>
      </div>
    );
  }
}
