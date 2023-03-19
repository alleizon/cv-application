import { Component } from "react";
import styled from "styled-components";
import { getWorkTemplate } from "../../utils/template";
import WorkHeader from "./WorkHeader";
import WorkBullet from "./WorkBullet";
import { ButtonS } from "../../utils/styleComponents";

export default class WorkTemplate extends Component {
  constructor(props) {
    super(props);
    this.newKey = this.makeKeys();
    const template = getWorkTemplate();
    const length = this.props.entriesLength;
    this.state = {
      header: template.header,
      bullets: length > 0 ? [] : this.mapTemplate(template.info),
      input: false,
      inputValue: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.removeBullet = this.removeBullet.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  mapTemplate(info) {
    return info.map((bullet) => ({ info: bullet, id: this.newKey() }));
  }

  makeKeys() {
    let id = 0;
    return () => (id += 1);
  }

  handleKeyUp(e) {
    if (e.type === "keyup") {
      if (e.key !== "Enter") return;
    }
    if (e.target.value === "") {
      this.setState({ input: false });
      return;
    }
    this.setState({
      input: false,
      inputValue: "",
      bullets: [...this.state.bullets].concat({
        info: e.target.value,
        id: this.newKey(),
      }),
    });
  }

  removeBullet(input) {
    const value = input.value;
    const id = +input.dataset.id;
    const bullet = this.state.bullets.findIndex((bullet) => bullet.id === id);
    if (value === "") {
      const copy = [...this.state.bullets];
      copy.splice(bullet, 1);
      this.setState({ bullets: copy });
    } else {
      const copy = [...this.state.bullets];
      copy[bullet].info = value;
      this.setState({ bullets: copy });
    }
  }

  handleInput(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleClick() {
    if (!document.querySelector("#control-buttons")) return;
    this.setState({ input: !this.state.input });
  }

  render() {
    return (
      <DivS data-id={this.props.id}>
        <WorkHeader
          type="position"
          isSpan={false}
          value={this.state.header.position}
        />
        <div>
          <WorkHeader
            type="company"
            isSpan={true}
            value={this.state.header.company}
          />
          <span> / </span>
          <WorkHeader
            type="location"
            isSpan={true}
            value={this.state.header.location}
          />
          <span> / </span>
          <WorkHeader
            type="start"
            isSpan={true}
            value={this.state.header.start}
          />
          <span> - </span>
          <WorkHeader type="end" isSpan={true} value={this.state.header.end} />
        </div>

        <UlS>
          {this.state.bullets.map((bullet) => (
            <WorkBullet
              value={bullet.info}
              removeBullet={this.removeBullet}
              key={bullet.id}
              id={bullet.id}
            />
          ))}
          {this.state.input ? (
            <InputS
              autoFocus
              value={this.state.inputValue}
              onInput={this.handleInput}
              onKeyUp={this.handleKeyUp}
              onBlur={this.handleKeyUp}
            ></InputS>
          ) : (
            <ButtonS onClick={this.handleClick}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </ButtonS>
          )}
        </UlS>
        <CloseBtn onClick={this.props.removeEntry}>
          <i className="fa-solid fa-xmark"></i>
        </CloseBtn>
      </DivS>
    );
  }
}

const DivS = styled.div`
  position: relative;
  padding: 20px;
  padding-right: 60px;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:hover {
    background-color: var(--entry-hover);
  }

  h2 {
    font-weight: 600;
    font-size: 1rem;
    min-height: 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
  }
`;

const CloseBtn = styled(ButtonS)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const UlS = styled.ul`
  margin-left: 20px;
  list-style: disc;
  font-size: 0.9rem;
  color: var(--text-gray);
`;

const InputS = styled.input`
  width: 50%;
  background-color: var(--gray-color);
  padding: 5px;
  border: 1px solid black;
  outline: none;
`;
