import React, { Component } from "react";

class inputComponent extends Component {
  constructor() {
    super();
    this.state = { output: "" };
  }

  changeStateOutput = (event) => {
    this.setState({ output: event.target.value });
  };

  addItem = () => {
    this.props.addItem(this.state.output);
  };

  render() {
    return (
      <div className="inputComponent">
        <input type="text" onChange={this.changeStateOutput} />
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}
export default inputComponent;
