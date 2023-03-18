import { Component } from "react";

export default class PreviewButton extends Component {
  constructor(props) {
    super(props);
    this.button = this.props.button;
  }

  render() {
    return (
      <this.button className="control" onClick={this.props.handlePreview}>
        Preview
      </this.button>
    );
  }
}
