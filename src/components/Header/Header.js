import styled from "styled-components";
import { Component } from "react";
import Name from "./Name";
import Title from "./Title";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Your name here",
      title: "Your title here",
    };
  }

  render() {
    return (
      <HeaderS id="header">
        <Name />
        <Title />
      </HeaderS>
    );
  }
}

const HeaderS = styled.div`
  grid-row: 1 / 1;
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    font-size: 2.5rem !important;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  p {
    font-size: 1.5rem !important;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  input {
    width: 60%;
    font-size: 2.5rem;
    border-radius: 30px;
    text-align: center;
    background-color: var(--gray-color);
    outline: none;
    border: 0px solid black;
  }

  input[data-field="title"] {
    font-size: 1.5rem;
    width: 40%;
  }

  &::after {
    position: absolute;
    content: "";
    width: 90%;
    bottom: 0;
    background-color: var(--gray-color);
    height: 2px;
  }
`;
