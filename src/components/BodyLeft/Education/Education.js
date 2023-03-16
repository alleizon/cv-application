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
    this.removeEntry = this.removeEntry.bind(this);
    this.newKey = this.getKey();
  }

  removeEntry(entryE) {
    const id = +entryE.dataset.fieldId;
    const target = this.state.entries.findIndex((entry) => entry.id === id);
    const copy = [...this.state.entries];
    copy.splice(target, 1);
    this.setState({
      entries: copy,
    });
  }

  getKey() {
    let id = 0;
    return () => (id += 1);
  }

  handleFormClick() {
    this.setState({ showForm: !this.state.showForm });
  }

  handleSubmit(obj) {
    const newId = this.newKey();
    const entry = {
      id: newId,
      component: (
        <EducationField removeEntry={this.removeEntry} index={newId} {...obj} />
      ),
    };
    const copy = this.state.entries.slice();
    copy.push(entry);
    this.setState({ entries: copy, showForm: false });
  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        {this.state.entries.map((item) => (
          <Fragment key={item.id}>{item.component}</Fragment>
        ))}
        {this.state.showForm ? (
          <EducationForm
            handleSubmit={this.handleSubmit}
            closeForm={this.handleFormClick}
          />
        ) : (
          <button onClick={this.handleFormClick}>
            <i className="fa-solid fa-plus"></i>
          </button>
        )}
      </div>
    );
  }
}
