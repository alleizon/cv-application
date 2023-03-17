import { Component } from "react";
import styled from "styled-components";

export default class EducationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <InputS
        autoFocus
        data-field={this.props.field}
        value={this.state.value}
        onBlur={this.props.handleKeyUp}
        onKeyUp={this.props.handleKeyUp}
        onInput={this.handleInput}
      ></InputS>
    );
  }
}

const InputS = styled.input``;
