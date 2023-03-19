import { Component } from "react";
import styled from "styled-components";
import SkillsList from "./SkillsList";
import { ButtonS } from "../../utils/styleComponents";

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      skills: [],
      showForm: false,
    };
    this.removeSkill = this.removeSkill.bind(this);
    this.editSkill = this.editSkill.bind(this);
    this.addField = this.addField.bind(this);
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

  addField() {
    const skill = {
      value: "Click to edit",
      id: this.newKey(),
    };

    this.setState({ skills: [...this.state.skills].concat(skill) });
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

  render() {
    return (
      <DivS id="skills">
        <h1>Skills</h1>
        <UlS>
          {this.state.skills.map((skill) => (
            <SkillsList
              key={skill.id}
              removeSkill={this.removeSkill}
              editSkill={this.editSkill}
              value={skill.value}
              id={skill.id}
            />
          ))}
        </UlS>

        <ButtonS onClick={this.addField}>
          <i className="fa-solid fa-plus"></i>
        </ButtonS>
      </DivS>
    );
  }
}

const DivS = styled.div`
  grid-row: 4 / 5;
  grid-column: 1 / 2;
`;

const UlS = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: disc;
  margin-left: 25px;
`;
