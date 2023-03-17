import { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value,
      default: this.props.default,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <input
        type="text"
        data-field={this.props.id}
        value={this.state.text}
        onInput={this.handleInput}
        onBlur={(e) => {
          this.props.handleKeyUp(e, this.state.text, this.state.default);
        }}
        onKeyUp={(e) => {
          this.props.handleKeyUp(e, this.state.text, this.state.default);
        }}
        autoFocus
      ></input>
    );
  }
}
