import { Component } from "react";
import styled from "styled-components";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <DivS id="profile">
        <h1>Profile</h1>
      </DivS>
    );
  }
}

const DivS = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;
