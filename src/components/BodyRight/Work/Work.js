import { Component } from "react";
import styled from "styled-components";

export default class Work extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <DivS id="work">
        <h1>Work Experience</h1>
      </DivS>
    );
  }
}

const DivS = styled.div`
  grid-row: 3 / 5;
  grid-column: 2 / 3;
`;
