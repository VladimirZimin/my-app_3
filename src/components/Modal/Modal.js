import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener("keydown", this.handleKeyDown);
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    console.log(evt);

    if (evt.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Backdrop">
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
