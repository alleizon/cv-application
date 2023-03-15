import { Component } from "react";
import EducationField from "./EducationField";
import EducationForm from "./EducationForm";

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      showForm: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({ showForm: true });
  }

  handleSubmit(obj) {
    const newEntry = {};
    for (let key in obj) {
      newEntry[key] = obj[key] === "" ? null : obj[key];
    }
    this.setState({
      entries: this.state.entries.concat(newEntry),
      showForm: false,
    });
  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        {this.state.entries.map((entry) => (
          <EducationField />
        ))}
        {this.state.showForm ? (
          <EducationForm handleSubmit={this.handleSubmit} />
        ) : (
          <button onClick={this.handleClick}>Add</button>
        )}
      </div>
    );
  }
}
