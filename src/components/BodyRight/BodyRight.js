import { Component } from "react";
import Profile from "./Profile/Profile";
import Work from "./Work/Work";

export default class BodyRight extends Component {
  render() {
    return (
      <>
        <Profile />
        <Work />
      </>
    );
  }
}
