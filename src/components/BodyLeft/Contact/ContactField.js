import { Component } from "react";
import styled from "styled-components";
import Input from "../../Input";
import { handleClick, handleKeyUp } from "../../utils/fieldHandlers";

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      icon: this.props.icon,
      showInput: false,
    };
    this.default = this.props.value;
    this.handleClick = handleClick.bind(this);
    this.handleKeyUp = handleKeyUp.bind(this);
  }

  render() {
    const { value, icon } = this.state;

    return this.state.showInput ? (
      <SpanS>
        {icon}
        <Input
          value={this.state.value}
          default={this.default}
          handleKeyUp={this.handleKeyUp}
        />
      </SpanS>
    ) : (
      <SpanS onClick={this.handleClick}>
        {icon} {value}
      </SpanS>
    );
  }
}

const SpanS = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 3px 10px;
  border-radius: 25px;
  height: 25px;
  font-size: 0.9rem;
  color: var(--text-gray);

  i {
    color: black;
  }
`;
