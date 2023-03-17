import { Component } from "react";
import styled from "styled-components";

export default class WorkHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      input: false,
      default: this.props.value,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    if (e.type === "keyup") {
      if (e.key !== "Enter") return;
    }
    this.setState({
      value: e.target.value || this.state.default,
      input: false,
    });
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    this.setState({ input: true });
  }

  render() {
    return this.state.input ? (
      <InputS
        isSpan={this.props.isSpan}
        value={this.state.value}
        onInput={this.handleInput}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleKeyUp}
        autoFocus
      ></InputS>
    ) : this.props.isSpan ? (
      <span id={this.props.type} onClick={this.handleClick}>
        {this.state.value}
      </span>
    ) : (
      <h2 id={this.props.type} onClick={this.handleClick}>
        {this.state.value}
      </h2>
    );
  }
}

const InputS = styled.input`
  ${({ isSpan }) => !isSpan && `display: block`}
`;
