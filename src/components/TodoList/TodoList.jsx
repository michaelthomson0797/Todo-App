import React, { Component } from 'react';

import Todo from '../Todo/Todo';

class TodoList extends Component {

  render() {
    return (
      <div>
        {this.props.todos.map((todo) =>
          <Todo deleteTodo={this.props.deleteTodo} key={todo.id} todo={todo}/>
        )}
      </div>
    )
  }
}

export default TodoList;