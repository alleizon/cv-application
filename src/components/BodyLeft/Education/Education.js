import { Component, Fragment } from "react";
import styled from "styled-components";
import EducationField from "./EducationField";
import { getEducationTemplate } from "../../utils/template";
import { ButtonS } from "../../utils/styleComponents";

export default class Education extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
    };
    this.addEntry = this.addEntry.bind(this);
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

  addEntry() {
    const obj = getEducationTemplate();
    const newId = this.newKey();
    const entry = {
      id: newId,
      component: (
        <EducationField removeEntry={this.removeEntry} index={newId} {...obj} />
      ),
    };
    this.setState({ entries: [...this.state.entries].concat(entry) });
  }

  getKey() {
    let id = 0;
    return () => (id += 1);
  }

  render() {
    return (
      <DivS id="education">
        <h1>Education</h1>
        {this.state.entries.map((item) => (
          <Fragment key={item.id}>{item.component}</Fragment>
        ))}

        <ButtonS onClick={this.addEntry}>
          <i className="fa-solid fa-plus"></i>
        </ButtonS>
      </DivS>
    );
  }
}

const DivS = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 2;
`;
