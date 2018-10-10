import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: props.completed,
      hovering: false
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
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

  onDeleteHandler(event) {
    return this.props.deleteTodo(this.state.id);
  }

  render() {
    return (
      <div 
        className={this.state.completed ? 'Completed flex row todo' : 'flex row todo'}
        onClick={this.clickHandler}
        onMouseEnter={this.hoverHandler}
        onMouseLeave={this.hoverHandler}  
      >
        <p className='todo-text'>
          {this.props.text}
        </p>
        {
          this.state.hovering &&
          <button onClick={() => {this.props.deleteTodo(this.props.id)}}>delete</button>
        }
      </div>
    );
  }
}

export default Todo;