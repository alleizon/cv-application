import { Component } from "react";
import styled from "styled-components";
import Input from "./Input";

export default class EducationForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      school: "",
      from: "",
      to: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const target = e.target.id;
    const value = e.target.value;
    this.setState({
      [target]: value,
    });
  }

  handleSubmit(e) {
    const { handleSubmit } = this.props;
    e.preventDefault();
    if (e.target.checkValidity()) handleSubmit(this.state);
  }

  render() {
    return (
      <FormS
        action="/
      "
        method="post"
        noValidate
        onSubmit={this.handleSubmit}
      >
        <LabelS htmlFor="title">
          Degree title{" "}
          <span style={{ fontWeight: 600 }} aria-required>
            *
          </span>
        </LabelS>
        <Input
          id="title"
          type="text"
          required={true}
          value={this.state.title}
          handleInput={this.handleInput}
        />

        <LabelS htmlFor="school">
          University / College{" "}
          <span style={{ fontWeight: 600 }} aria-required>
            *
          </span>
        </LabelS>
        <Input
          id="school"
          type="text"
          required={true}
          value={this.state.school}
          handleInput={this.handleInput}
        />

        <WrapperS>
          <LabelS htmlFor="from">
            From:{" "}
            <span style={{ fontWeight: 600 }} aria-required>
              *
            </span>
          </LabelS>
          <Input
            id="from"
            type="number"
            required={true}
            value={this.state.from}
            handleInput={this.handleInput}
          />
          <LabelS htmlFor="to">To:</LabelS>
          <Input
            id="to"
            type="number"
            value={this.state.to}
            handleInput={this.handleInput}
          />
        </WrapperS>
        <WrapperS>
          <ButtonS type="submit">
            <i className="fa-solid fa-plus"></i>
          </ButtonS>
          <ButtonS onClick={this.props.closeForm} type="button">
            <i className="fa-solid fa-xmark"></i>
          </ButtonS>
        </WrapperS>
      </FormS>
    );
  }
}

const FormS = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonS = styled.button``;

const LabelS = styled.label``;

const WrapperS = styled.div`
  display: flex;
`;

export { ButtonS };
