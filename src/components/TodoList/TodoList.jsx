import React, { Component } from 'react';

import Todo from '../Todo/Todo';

class TodoList extends Component {

  render() {
    return (
      <div>
        {this.props.todos.map((todo, id) =>
          <Todo deleteTodo={this.props.deleteTodo} id={id} text={todo.text} completed={todo.completed}/>
        )}
      </div>
    )
  }
}

export default TodoList;