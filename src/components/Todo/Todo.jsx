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
    this.hoverHandler = this.hoverHandler.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  hoverHandler(event) {
    this.setState({
      hovering: !this.state.hovering
    })
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
        //className={this.state.completed ? 'Completed flex row todo align-center justify-center' : 'flex row todo align-center justify-center'}
        className="flex row align-center"
        onMouseEnter={this.hoverHandler}
        onMouseLeave={this.hoverHandler}  
      >
        <p className={this.state.completed ? 'Completed' : ''}>{this.props.todo.text}</p>
        {
          this.state.hovering &&
          <div className="flex row justify-end align-center">
            <i className="fas fa-trash-alt" onClick={() => this.props.deleteTodo(this.props.todo.id)}/>
            <i className={this.state.completed ? "fas fa-check completed-icon" : "fas fa-check"} onClick={this.clickHandler}/>
          </div>
        }
      </div>
    );
  }
}

export default Todo;