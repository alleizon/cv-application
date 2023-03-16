import { Component } from "react";
import styled from "styled-components";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { valid: true };
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e) {
    const target = e.target;
    if (target.validity.valid) this.setState({ valid: true });
    else this.setState({ valid: false });
  }

  render() {
    const { id, type, required, value, handleInput } = this.props;
    return (
      <InputS
        valid={this.state.valid}
        id={id}
        type={type}
        required={required}
        value={value}
        onInput={handleInput}
        onBlur={this.handleBlur}
        autoComplete="off"
      ></InputS>
    );
  }
}

const InputS = styled.input`
  ${(props) => (!props.valid ? `border: 1px solid red` : "")};
`;
