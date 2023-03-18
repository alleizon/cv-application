import { Component } from "react";
import styled from "styled-components";
import SkillsForm from "./SkillsForm";
import SkillsList from "./SkillsList";

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [],
      showForm: false,
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
    this.editSkill = this.editSkill.bind(this);
    this.newKey = this.initKey();
  }

  removeSkill(e) {
    const li = e.currentTarget.parentElement;
    const index = this.state.skills.findIndex(
      (skill) => skill.id === +li.dataset.id
    );
    const copy = this.state.skills.slice();
    copy.splice(index, 1);
    this.setState({
      skills: copy,
    });
  }

  editSkill(e) {
    const value = e.target.value;
    const id = +e.target.dataset.id;
    const target = this.state.skills.findIndex((skill) => skill.id === id);
    const copy = this.state.skills.slice();
    if (value === "") {
      copy.splice(target, 1);
      this.setState({ skills: copy });
      return;
    }
    copy[target].value = value;
    this.setState({ skills: copy });
  }

  initKey() {
    let id = 0;
    return () => (id += 1);
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  handleSubmit(value) {
    if (!value) {
      this.setState({ showForm: false });
      return;
    }
    const key = this.newKey();
    const skill = { value: value, id: key };
    this.setState({
      skills: [...this.state.skills].concat(skill),
      showForm: false,
    });
  }

  render() {
    return (
      <DivS id="skills">
        <h1>Skills</h1>
        <ul>
          {this.state.skills.map((skill) => (
            <SkillsList
              key={skill.id}
              removeSkill={this.removeSkill}
              editSkill={this.editSkill}
              value={skill.value}
              id={skill.id}
            />
          ))}
        </ul>

        {this.state.showForm ? (
          <SkillsForm
            toggleForm={this.toggleForm}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <ButtonS onClick={this.toggleForm}>
            <i className="fa-solid fa-plus"></i>
          </ButtonS>
        )}
      </DivS>
    );
  }
}

const DivS = styled.div`
  grid-row: 4 / 5;
  grid-column: 1 / 2;
`;

const ButtonS = styled.button``;

export { ButtonS };
