import { Component } from "react";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

export default class BodyLeft extends Component {
  render() {
    return (
      <>
        <Contact />
        <Education />
        <Skills />
      </>
    );
  }
}
