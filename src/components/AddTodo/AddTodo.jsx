import React, { Component } from 'react';

class AddTodo extends Component {

  constructor(props) {
    super(props);

    this.state = { value: "" };
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event) {
    this.setState({ value: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.setState({value: ""})
    this.props.addTodo(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" value={this.state.value} onChange={this.onChangeHandler}/>
        <input type="submit" value="Add"/>
      </form>
    )
  }
}

export default AddTodo;