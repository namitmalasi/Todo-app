import React, { Component } from "react";
import AddForm from "./AddForm";
import TodoList from "./Todolist";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addForm = this.addForm.bind(this);
  }
  deleteTodo(id) {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  }
  addForm(todo) {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo App</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addForm={this.addForm} />
      </div>
    );
  }
}

export default Todo;
