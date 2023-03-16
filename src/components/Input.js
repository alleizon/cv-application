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
        type="text"
        data-field={this.props.id}
        value={this.state.text}
        onInput={this.handleInput}
        onKeyUp={(e) => {
          if (e.key !== "Enter") return;
          this.props.handleKeyUp(e, this.state.text);
        }}
        autoFocus
      ></input>
    );
  }
}
