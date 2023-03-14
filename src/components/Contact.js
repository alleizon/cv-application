import { Component } from "react";
import fields from "./utils/contactFields";
import Field from "./Field";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = fields;
  }

  render() {
    return (
      <div id="contact" className="flex flex-col">
        <Field {...this.state.address} />
        <Field {...this.state.phone} />
        <Field {...this.state.email} />
        <Field {...this.state.linkedIn} />
      </div>
    );
  }
}
