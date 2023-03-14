import { Component } from "react";
import Contact from "./Contact";
import Education from "./Education";
import Skills from "./Skills";

export default class BodyLeft extends Component {
  render() {
    return (
      <div id="body-left">
        <Contact />
        <Education />
        <Skills />
      </div>
    );
  }
}
