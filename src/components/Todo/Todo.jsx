import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: props.todo.completed,
      hovering: false
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  clickHandler(event) {
    this.setState({
      completed: !this.state.completed
    })
  }

  deleteTodo(event, id) {
    this.props.deleteTodo(this.state.id);
  }

  render() {
    return (
      <div 
        className="flex row space-between align-center"
        onMouseEnter={this.hoverHandler}
        onMouseLeave={this.hoverHandler}  
      >
        <p className={this.state.completed ? 'Completed' : ''}>{this.props.todo.text}</p>
          <div className="flex row align-center">
            <i className="fas fa-trash-alt" onClick={() => this.props.deleteTodo(this.props.todo.id)}/>
            <i className={this.state.completed ? "fas fa-check completed-icon" : "fas fa-check"} onClick={this.clickHandler}/>
          </div>
      </div>
    );
  }
}

export default Todo;