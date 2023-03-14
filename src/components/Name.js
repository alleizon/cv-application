import { Component } from "react";
import Input from "./utils/Input";
import { handleClick, handleKeyUp } from "./utils/fieldHandlers";

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
      value: "Your name here",
    };
    this.handleClick = handleClick.bind(this);
    this.handleKeyUp = handleKeyUp.bind(this);
  }

  render() {
    return this.state.showInput ? (
      <Input
        value={this.state.value}
        default="Your name here"
        handleKeyUp={this.handleKeyUp}
      />
    ) : (
      <h1 onClick={this.handleClick}>{this.state.value}</h1>
    );
  }
}
