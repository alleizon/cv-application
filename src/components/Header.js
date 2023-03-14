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
      <div className="col-span-2 flex flex-col items-center justify-center">
        <Name />
        <Title />
      </div>
    );
  }
}
