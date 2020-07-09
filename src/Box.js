import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 0, idc: 0 };
    this.generate = this.generate.bind(this);
  }

  generate() {
    const newColor = Math.floor(100000 + Math.random() * 900000);
    this.setState({
      color: newColor,
      idc: `${this.props.no}`,
    });
    document.getElementById(
      `${this.state.idc}`
    ).style.backgroundColor = `#${this.state.color}`;
  }
  render() {
    return (
      <div className="box" id={this.state.idc} onClick={this.generate}></div>
    );
  }
}

export default Box;
