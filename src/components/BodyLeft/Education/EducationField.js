import { Component } from "react";
import styled from "styled-components";
import Input from "../../Input";

export default class EducationField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: this.props.title,
        input: false,
      },
      school: {
        value: this.props.school,
        input: false,
      },
      from: {
        value: this.props.from,
        input: false,
      },
      to: {
        value: this.props.to,
        input: false,
      },
    };
    this.handleFieldClick = this.handleFieldClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleFieldClick(key, value) {
    const obj = { ...this.state[key] };
    obj.input = !obj.input;
    if (value) obj.value = value;
    this.setState({
      [key]: obj,
    });
  }

  handleKeyUp(e, value) {
    const key = e.target.dataset.field;
    if (value === "")
      this.setState({ [key]: { value: this.state[key].value, input: false } });
    else this.setState({ [key]: { value: value, input: false } });
  }

  render() {
    const entries = Object.entries(this.state);
    return (
      <DivS data-field-id={this.props.index}>
        {entries.map((entry, index) => {
          const [key, obj] = entry;
          const [value, isInput] = Object.values(obj);
          return isInput ? (
            <Input
              id={key}
              value={value}
              key={index + 4}
              handleKeyUp={this.handleKeyUp}
            />
          ) : (
            <p
              key={index}
              onClick={() => {
                this.handleFieldClick(key);
              }}
            >
              {value}
            </p>
          );
        })}
        <ButtonS
          onClick={(e) => this.props.removeEntry(e.currentTarget.parentElement)}
        >
          <i className="fa-solid fa-xmark"></i>
        </ButtonS>
      </DivS>
    );
  }
}

const DivS = styled.div`
  position: relative;
`;

const ButtonS = styled.button`
  position: absolute;
  right: 0;
  top: 0;
`;
