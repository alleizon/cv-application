import { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <input
        className="border border-black"
        type="text"
        value={this.state.text}
        onInput={this.handleInput}
        onKeyUp={(e) => {
          this.props.handleKeyUp(e, this.state.text, this.props.default);
        }}
        autoFocus
      ></input>
    );
  }
}
