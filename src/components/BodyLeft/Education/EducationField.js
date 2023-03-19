import { Component } from "react";
import styled from "styled-components";
import EducationInput from "./EducationInput";
import { ButtonS } from "../../utils/styleComponents";

export default class EducationField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: this.props.title,
        input: false,
        default: this.props.title,
      },
      school: {
        value: this.props.school,
        input: false,
        default: this.props.school,
      },
      from: {
        value: this.props.from,
        input: false,
        default: this.props.from,
      },
      to: {
        value: this.props.to,
        input: false,
        default: this.props.to,
      },
    };
    this.handleFieldClick = this.handleFieldClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleFieldClick(e) {
    if (!document.querySelector("#control-buttons")) return;
    const key = e.target.dataset.field;
    this.setState({
      [key]: {
        value: this.state[key].value,
        input: !this.state[key].input,
        default: this.state[key].default,
      },
    });
  }

  handleKeyUp(e) {
    if (e.type === "keyup") {
      if (e.key !== "Enter") return;
    }
    const key = e.target.dataset.field;
    const obj = { ...this.state[key] };
    obj.value = e.target.value || this.state[key].default;
    obj.input = false;
    this.setState({ [key]: obj });
  }

  render() {
    return (
      <DivS data-field-id={this.props.index}>
        {this.state.title.input ? (
          <EducationInput
            field="title"
            value={this.state.title.value}
            handleKeyUp={this.handleKeyUp}
          />
        ) : (
          <SpanS data-field="title" onClick={this.handleFieldClick}>
            {this.state.title.value}
          </SpanS>
        )}
        {this.state.school.input ? (
          <EducationInput
            field="school"
            value={this.state.school.value}
            handleKeyUp={this.handleKeyUp}
          />
        ) : (
          <SpanS data-field="school" onClick={this.handleFieldClick}>
            {this.state.school.value}
          </SpanS>
        )}
        <div>
          {this.state.from.input ? (
            <EducationInput
              field="from"
              value={this.state.from.value}
              handleKeyUp={this.handleKeyUp}
            />
          ) : (
            <SpanS data-field="from" onClick={this.handleFieldClick}>
              {this.state.from.value}
            </SpanS>
          )}
          <SpanS> - </SpanS>
          {this.state.to.input ? (
            <EducationInput
              field="to"
              value={this.state.to.value}
              handleKeyUp={this.handleKeyUp}
            />
          ) : (
            <SpanS data-field="to" onClick={this.handleFieldClick}>
              {this.state.to.value}
            </SpanS>
          )}
        </div>
        <AbsButton
          onClick={(e) => this.props.removeEntry(e.currentTarget.parentElement)}
        >
          <i className="fa-solid fa-xmark"></i>
        </AbsButton>
      </DivS>
    );
  }
}

const DivS = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  padding-right: 35px;
  border-radius: 10px;

  &:hover {
    background-color: var(--entry-hover);
  }

  & > div {
    display: flex;
    gap: 10px;
    height: 30px;
    align-items: center;
  }

  & > div > input {
    max-width: 50px;
  }
`;

const AbsButton = styled(ButtonS)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SpanS = styled.span`
  font-size: 0.9rem;
  color: var(--text-gray);
  min-height: 30px;
  display: flex;
  align-items: center;

  &[data-field="title"] {
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: black;
  }
`;
