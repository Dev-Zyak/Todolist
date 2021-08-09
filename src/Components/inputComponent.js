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
    this.setState({ output: "" });
    document.querySelector("#text").value = null;
  };

  render() {
    return (
      <div className="inputComponent">
        <input type="text" id="text" onChange={this.changeStateOutput} />
        <div onClick={this.addItem}>+</div>
      </div>
    );
  }
}
export default inputComponent;
