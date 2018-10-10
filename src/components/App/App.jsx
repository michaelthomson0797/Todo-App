import React, { Component } from 'react';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { todos: [] };

    this.addTodo = this.addTodo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  addTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo)});
  }

  deleteToDo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => {
        return id !== index;
      })
    })

    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <h1>To-Do List</h1>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList deleteTodo={this.deleteToDo} todos={this.state.todos}/> 
      </div>
    );
  }
}

export default App;
