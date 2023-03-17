import { Component, Fragment } from "react";
import styled from "styled-components";
import WorkTemplate from "./WorkTemplate";

export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      entries: [],
    };
    this.addTemplate = this.addTemplate.bind(this);
    this.newKey = this.makeKeys();
    this.removeEntry = this.removeEntry.bind(this);
  }

  makeKeys() {
    let id = 0;
    return () => (id += 1);
  }

  removeEntry(e) {
    const id = +e.currentTarget.parentElement.dataset.id;
    const entry = this.state.entries.findIndex((entry) => entry.id === id);
    const copy = this.state.entries.slice();
    copy.splice(entry, 1);
    this.setState({ entries: copy });
  }

  addTemplate() {
    const id = this.newKey();
    const entry = {
      work: (
        <WorkTemplate
          id={id}
          removeEntry={this.removeEntry}
          entriesLength={this.state.entries.length}
        />
      ),
      id: id,
    };

    this.setState({ entries: this.state.entries.concat(entry) });
  }

  render() {
    return (
      <DivS id="work">
        <h1>Work Experience</h1>
        {this.state.entries.map((entry) => (
          <Fragment key={entry.id}>{entry.work}</Fragment>
        ))}

        <ButtonS onClick={this.addTemplate}>
          <i className="fa-solid fa-plus"></i>
        </ButtonS>
      </DivS>
    );
  }
}

const DivS = styled.div`
  grid-row: 3 / 5;
  grid-column: 2 / 3;
`;

const ButtonS = styled.button``;
