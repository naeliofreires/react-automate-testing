import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    text: "",
    todos: []
  };

  componentDidMount() {
    const myTodos = localStorage.getItem("todos");

    if (myTodos) {
      this.setState({ todos: JSON.parse(myTodos) });
    }
  }
  handleInputChange = e => this.setState({ text: e.target.value });

  handleAddTodo = () => {
    this.setState(
      { todos: [...this.state.todos, this.state.text], text: "" },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  };

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
