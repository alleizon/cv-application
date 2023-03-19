import { Component } from "react";
import fields from "../../utils/contactFields";
import Field from "./ContactField";
import styled from "styled-components";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = fields;
  }

  render() {
    return (
      <ContactS id="contact">
        <h1>Contact</h1>
        <Field {...this.state.address} />
        <Field {...this.state.phone} />
        <Field {...this.state.email} />
        <Field {...this.state.linkedIn} />
      </ContactS>
    );
  }
}

const ContactS = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  &::after {
    position: absolute;
    content: "";
    top: calc(65px + 2rem);
    right: 0;
    width: 2px;
    height: calc(100% - 65px - 2rem);
    background-color: var(--gray-color);
  }
`;
