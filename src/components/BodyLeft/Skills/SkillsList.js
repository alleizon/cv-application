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
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    this.setState({ showInput: true });
  }

  render() {
    return this.state.showInput ? (
      <>
        <InputS
          data-id={this.props.id}
          autoFocus
          onInput={this.handleInput}
          onKeyUp={(e) => {
            if (e.key !== "Enter") return;
            this.props.editSkill(e);
            this.setState({ showInput: false });
          }}
          value={this.state.value}
        ></InputS>
        <ButtonAbsS onClick={this.props.removeSkill}>
          <i className="fa-solid fa-xmark"></i>
        </ButtonAbsS>
      </>
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
`;

const ButtonAbsS = styled.button`
  position: absolute;
`;

const InputS = styled.input``;
