import { Component } from "react";
import Input from "./utils/Input";
import { handleClick, handleKeyUp } from "./utils/fieldHandlers";

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      icon: this.props.icon,
      showInput: false,
    };
    this.default = this.props.value;
    this.handleClick = handleClick.bind(this);
    this.handleKeyUp = handleKeyUp.bind(this);
  }

  render() {
    const { value, icon } = this.state;

    return this.state.showInput ? (
      <span>
        {icon}
        <Input
          value={this.state.value}
          default={this.default}
          handleKeyUp={this.handleKeyUp}
        />
      </span>
    ) : (
      <span onClick={this.handleClick}>
        {icon} {value}
      </span>
    );
  }
}
