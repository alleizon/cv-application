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
`;
