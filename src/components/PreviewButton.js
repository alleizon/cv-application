import { Component } from "react";

export default class PreviewButton extends Component {
  constructor(props) {
    super(props);
    this.button = this.props.button;
    this.handlePreview = this.handlePreview.bind(this);
  }

  handlePreview() {
    const buttons = [...document.querySelectorAll("button:not(.control)")];
    buttons.forEach((button) => {
      button.classList.add("hide");
    });
  }

  render() {
    return (
      <this.button className="control" onClick={this.handlePreview}>
        Preview
      </this.button>
    );
  }
}
