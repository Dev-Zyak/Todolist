import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  removeItem = () => {
    this.props.removeItem(this.props.id);
  };

  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={this.removeItem}> Remove </button>
      </div>
    );
  }
}
export default Item;
