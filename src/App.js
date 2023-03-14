import { Component } from "react";
import Header from "./components/Header";
import BodyLeft from "./components/BodyLeft";
import BodyRight from "./components/BodyRight";

export default class App extends Component {
  render() {
    return (
      <div className="container grid h-screen grid-cols-body grid-rows-body">
        <Header />
        <BodyLeft />
        <BodyRight />
      </div>
    );
  }
}

console.clear();
