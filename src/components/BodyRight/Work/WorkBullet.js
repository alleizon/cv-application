import { Component } from "react";
import styled from "styled-components";

export default class WorkBullet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      input: false,
      id: this.props.id,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    if (e.type === "keyup") {
      if (e.key !== "Enter") return;
    }
    this.props.removeBullet(e.target);
    this.setState({ input: false });
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    this.setState({ input: !this.state.input });
  }

  render() {
    return this.state.input ? (
      <InputS
        data-id={this.state.id}
        value={this.state.value}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleKeyUp}
        onInput={this.handleInput}
        autoFocus
      ></InputS>
    ) : (
      <LiS onClick={this.handleClick} data-id={this.state.id}>
        {this.state.value}
      </LiS>
    );
  }
}

const LiS = styled.li``;

const InputS = styled.input``;
