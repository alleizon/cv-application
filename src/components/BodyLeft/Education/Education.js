import { Component, Fragment } from "react";
import EducationField from "./EducationField";
import EducationForm from "./EducationForm";

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
      showForm: false,
    };
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newKey = this.getKey();
  }

  getKey() {
    let id = 0;
    return () => (id += 1);
  }

  handleFormClick() {
    this.setState({ showForm: true });
  }

  handleSubmit(obj) {
    const entry = {
      id: this.newKey(),
      component: <EducationField {...obj} />,
    };
    const copy = this.state.entries.slice();
    copy.push(entry);
    this.setState({ entries: copy, showForm: false });
  }

  render() {
    console.log(this.state.entries);
    return (
      <div>
        <h1>Education</h1>
        {this.state.entries.map((item) => (
          <Fragment key={item.id}>{item.component}</Fragment>
        ))}
        {this.state.showForm ? (
          <EducationForm handleSubmit={this.handleSubmit} />
        ) : (
          <button onClick={this.handleFormClick}>Add</button>
        )}
      </div>
    );
  }
}
