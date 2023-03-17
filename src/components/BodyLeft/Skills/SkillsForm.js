import { Component } from "react";
import styled from "styled-components";
import { ButtonS } from "./Skills";

export default class SkillsForm extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      valid: false,
    };
    this.isFirstRender = true;
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    this.isFirstRender = false;
  }

  handleBlur(e) {
    this.props.handleSubmit(e.target.value);
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,
      valid: e.target.value !== "",
    });
  }

  render() {
    return (
      <FormS
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          if (!this.state.valid) return;
          this.props.handleSubmit(this.state.value);
        }}
      >
        <InputS
          {...this.state}
          isFirstRender={this.isFirstRender}
          type="text"
          required
          onBlur={this.handleBlur}
          onInput={this.handleInput}
          value={this.state.value}
          autoFocus
        ></InputS>
        <ButtonS type="submit">
          <i className="fa-solid fa-plus"></i>
        </ButtonS>
        <ButtonS type="button" onClick={this.props.toggleForm}>
          <i className="fa-solid fa-xmark"></i>
        </ButtonS>
      </FormS>
    );
  }
}

const InputS = styled.input`
  ${({ valid, value, isFirstRender }) => {
    if (value === "" && !valid && !isFirstRender)
      return `
    border: 1px solid red;
    outline: none;`;
    if (!valid && !isFirstRender) return `border: 1px solid red`;
  }}
`;

const FormS = styled.form``;
