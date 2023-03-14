import { Component } from "react";

export default class Title extends Component {
  constructor() {
    super();
    this.state = {
      input: {
        show: false,
        text: "",
      },
      title: "Your title here",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    if (e.key !== "Enter") return;
    const title = this.state.input.text;
    this.setState({
      input: { show: false, text: "" },
      title: title === "" ? "Your title here" : title,
    });
  }

  handleInput(e) {
    const tmp = { ...this.state.input };
    tmp.text = e.target.value;
    this.setState({ input: tmp });
  }

  handleClick() {
    this.setState({
      input: {
        show: true,
        text: this.state.title,
      },
    });
  }

  render() {
    return this.state.input.show ? (
      <input
        className="border border-black"
        type="text"
        value={this.state.input.text}
        onInput={this.handleInput}
        onKeyUp={this.handleKeyUp}
        autoFocus
      ></input>
    ) : (
      <p onClick={this.handleClick}>{this.state.title}</p>
    );
  }
}
