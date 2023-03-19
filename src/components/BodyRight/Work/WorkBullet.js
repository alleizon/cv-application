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
    if (!document.querySelector("#control-buttons")) return;
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

const LiS = styled.li`
  min-height: 30px;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    right: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--text-gray);
  }
`;

const InputS = styled.input`
  background-color: var(--gray-color);
  border: 1px solid black;
  outline: none;
  width: 65%;
  height: 30px;
  padding: 5px;
`;
