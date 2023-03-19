import { Component } from "react";
import styled from "styled-components";
import getLoremIpsum from "../../utils/lorem";
import { ButtonS } from "../../utils/styleComponents";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      value: getLoremIpsum(),
      showInput: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  handleBlur() {
    this.setState({
      value: this.state.value || getLoremIpsum(),
      showInput: false,
    });
  }

  handleClick() {
    if (!document.querySelector("#control-buttons")) return;
    this.setState({ showInput: !this.state.showInput });
  }

  render() {
    return (
      <DivS id="profile">
        <h1>Profile</h1>
        {this.state.showInput ? (
          <>
            <TextareaS
              autoFocus
              onBlur={this.handleBlur}
              onInput={this.handleInput}
              value={this.state.value}
            ></TextareaS>
            <AbsButton onClick={this.handleClick}>
              <i className="fa-solid fa-check"></i>
            </AbsButton>
          </>
        ) : (
          <p onClick={this.handleClick}>{this.state.value}</p>
        )}
      </DivS>
    );
  }
}

const DivS = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  position: relative;
`;

const TextareaS = styled.textarea`
  width: 95%;
  height: 85%;
  padding: 0;
  resize: none;
`;

const AbsButton = styled(ButtonS)`
  position: absolute;
  right: 100%;
  top: 42%;
`;
