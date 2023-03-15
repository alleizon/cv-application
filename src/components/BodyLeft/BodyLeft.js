import styled from "styled-components";
import { Component } from "react";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

export default class BodyLeft extends Component {
  render() {
    return (
      <BodyLeftS id="body-left">
        <Contact />
        <Education />
        <Skills />
      </BodyLeftS>
    );
  }
}

const BodyLeftS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
