import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "./store/ducks/todos";

class TodoList extends Component {
  state = {
    text: ""
  };

  handleInputChange = e => this.setState({ text: e.target.value });

  handleAddTodo = () => {
    /* this.setState(
      { todos: [...this.state.todos, this.state.text], text: "" },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );*/
    this.props.addTodo("novo todo hein");
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
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

const mapStateToProps = state => ({
  todos: state.todos.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
