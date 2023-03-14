import { Component } from "react";
import Input from "./utils/Input";

export default class Title extends Component {
  constructor() {
    super();
    this.state = {
      showInput: false,
      title: "Your title here",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e, text) {
    if (e.key !== "Enter") return;
    this.setState({ showInput: false, title: text ? text : "Your title here" });
  }

  handleClick() {
    this.setState({
      showInput: true,
    });
  }

  render() {
    return this.state.showInput ? (
      <Input value={this.state.title} handleKeyUp={this.handleKeyUp} />
    ) : (
      <p onClick={this.handleClick}>{this.state.title}</p>
    );
  }
}