import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';

window.id = 0;
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { todos: [] };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(text) {
    this.setState({ todos: [...this.state.todos, {id: window.id++, text: text, completed: false}]});
  }

  deleteTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter((todo) =>  id !== todo.id)
    }))
  }

  render() {
    return (
      <div className="container">
        <h1>To-Do List</h1>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos}/> 
      </div>
    );
  }
}

export default App;
