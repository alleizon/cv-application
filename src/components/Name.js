import { Component } from "react";
import Input from "./utils/Input";

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
      name: "Your name here",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e, text) {
    if (e.key !== "Enter") return;
    this.setState({ showInput: false, name: text ? text : "Your name here" });
  }

  handleClick() {
    this.setState({
      showInput: true,
    });
  }

  render() {
    return this.state.showInput ? (
      <Input value={this.state.name} handleKeyUp={this.handleKeyUp} />
    ) : (
      <h1 onClick={this.handleClick}>{this.state.name}</h1>
    );
  }
}
