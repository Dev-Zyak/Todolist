import React, { Component } from "react";
import InputComponent from "./inputComponent";
import Item from "./Item";
class Container extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  addItem = (todoText) => {
    this.state.todos.push({ text: todoText, id: Math.random() });
    this.setState({ todos: this.state.todos });
  };

  removeItem = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.filter((ele) => {
        return ele.id != id;
      }),
    });
  };

  render() {
    return (
      <div>
        <InputComponent addItem={this.addItem} />

        {this.state.todos.map((todo) => {
          return (
            <div>
              <Item
                text={todo.text}
                key={todo.id}
                id={todo.id}
                removeItem={this.removeItem}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Container;
