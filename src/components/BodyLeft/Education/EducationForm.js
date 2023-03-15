import { Component } from "react";
import styled from "styled-components";

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
    console.log(e.nativeEvent);
  }

  render() {
    return (
      <FormS onSubmit={this.handleSubmit}>
        <LabelS>Degree title</LabelS>
        <InputS
          id="title"
          value={this.state.title}
          onInput={this.handleInput}
          placeholder="e.g.: Bachelor of Science"
          required
        ></InputS>

        <LabelS>University / College</LabelS>
        <InputS
          id="school"
          value={this.state.school}
          onInput={this.handleInput}
          placeholder="e.g.: Harvard University"
          required
        ></InputS>

        <WrapperS>
          <LabelS>From:</LabelS>
          <InputS
            id="from"
            value={this.state.from}
            onInput={this.handleInput}
            placeholder="2012"
            type="number"
            required
          ></InputS>
          <LabelS>To:</LabelS>
          <InputS
            id="to"
            value={this.state.to}
            onInput={this.handleInput}
            placeholder="2016"
            type="number"
          ></InputS>
        </WrapperS>

        <ButtonS>Add</ButtonS>
      </FormS>
    );
  }
}

const FormS = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputS = styled.input``;

const ButtonS = styled.button``;

const LabelS = styled.label``;

const WrapperS = styled.div`
  display: flex;
`;
