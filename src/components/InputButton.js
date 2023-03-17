import { Component } from "react";

export default class InputButton extends Component {
  constructor(props) {
    super(props);
    this.button = this.props.button;
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput() {
    const buttons = [...document.querySelectorAll("button:not(.control)")];
    buttons.forEach((button) => {
      button.classList.remove("hide");
    });
  }

  render() {
    return (
      <this.button className="control" onClick={this.handleInput}>
        Input
      </this.button>
    );
  }
}
