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
      <div className="item">
        <h1>{this.props.text}</h1>
        <div onClick={this.removeItem}> x </div>
      </div>
    );
  }
}
export default Item;
