import { Component } from "react";

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      icon: this.props.icon,
    };
    this.default = this.props.value;
  }

  render() {
    console.log(this.state);
    const { value, icon } = this.state;
    return (
      <span>
        {icon} {value}
      </span>
    );
  }
}
