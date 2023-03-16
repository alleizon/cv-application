import { Component } from "react";
import Input from "../Input";
import { handleClick, handleKeyUp } from "../utils/fieldHandlers";

export default class Title extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
      value: "Your title here",
    };
    this.handleClick = handleClick.bind(this);
    this.handleKeyUp = handleKeyUp.bind(this);
  }

  render() {
    return this.state.showInput ? (
      <Input
        value={this.state.value}
        default="Your title here"
        handleKeyUp={this.handleKeyUp}
      />
    ) : (
      <p onClick={this.handleClick}>{this.state.value}</p>
    );
  }
}
