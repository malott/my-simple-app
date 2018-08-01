import React, { Component } from "react";
import { Button } from "./buttonComponent";
// App.js
export class App extends Component {
  render() {
    return (
      <div>
        <img src={this.props.comic} alt="" />
      </div>
    );
  }
}
