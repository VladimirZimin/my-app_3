import React, { Component } from "react";
import "./Clock.css";

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount = () => {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="Clockface">{this.state.time}</div>;
  }
}
