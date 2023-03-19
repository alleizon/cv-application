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
          <span data-field="title" onClick={this.handleFieldClick}>
            {this.state.title.value}
          </span>
        )}
        {this.state.school.input ? (
          <EducationInput
            field="school"
            value={this.state.school.value}
            handleKeyUp={this.handleKeyUp}
          />
        ) : (
          <span data-field="school" onClick={this.handleFieldClick}>
            {this.state.school.value}
          </span>
        )}
        <div>
          {this.state.from.input ? (
            <EducationInput
              field="from"
              value={this.state.from.value}
              handleKeyUp={this.handleKeyUp}
            />
          ) : (
            <span data-field="from" onClick={this.handleFieldClick}>
              {this.state.from.value}
            </span>
          )}
          <span> - </span>
          {this.state.to.input ? (
            <EducationInput
              field="to"
              value={this.state.to.value}
              handleKeyUp={this.handleKeyUp}
            />
          ) : (
            <span data-field="to" onClick={this.handleFieldClick}>
              {this.state.to.value}
            </span>
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
`;

const AbsButton = styled(ButtonS)`
  position: absolute;
  top: 0;
  right: 0;
`;
