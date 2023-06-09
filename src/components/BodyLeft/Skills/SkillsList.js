import { Component } from "react";
import styled from "styled-components";

export default class SkillsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      id: this.props.id,
      showInput: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyUp(e) {
    if (e.type === "keyup") {
      if (e.key !== "Enter") return;
    }
    this.props.editSkill(e);
    this.setState({ showInput: false });
  }

  handleClick() {
    if (!document.querySelector("#control-buttons")) return;
    this.setState({ showInput: true });
  }

  render() {
    return this.state.showInput ? (
      <InputS
        data-id={this.props.id}
        autoFocus
        onInput={this.handleInput}
        onBlur={this.handleKeyUp}
        onKeyUp={this.handleKeyUp}
        value={this.state.value}
      ></InputS>
    ) : (
      <LiS data-id={this.props.id} onClick={this.handleClick}>
        {this.state.value}
        <ButtonAbsS onClick={this.props.removeSkill}>
          <i className="fa-solid fa-xmark"></i>
        </ButtonAbsS>
      </LiS>
    );
  }
}

const LiS = styled.li`
  position: relative;
  padding: 5px;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  height: 30px;

  &:hover {
    background-color: var(--gray-color);
  }
`;

const ButtonAbsS = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;
  border: 0px solid transparent;
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--gray-color);
  }

  i {
    padding-top: 2px;
  }
`;

const InputS = styled.input`
  max-width: fit-content;
  height: 30px;
  padding: 5px;
  font-size: 1rem;
  background-color: var(--gray-color);
  outline: none;
  border: 1px solid black;
`;
