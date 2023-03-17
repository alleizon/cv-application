import { Component } from "react";
import styled from "styled-components";
import { getWorkTemplate } from "../../utils/template";
import WorkHeader from "./WorkHeader";
import WorkBullet from "./WorkBullet";

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
        <ul>
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
        </ul>
        <CloseBtn onClick={this.props.removeEntry}>
          <i className="fa-solid fa-xmark"></i>
        </CloseBtn>
      </DivS>
    );
  }
}

const DivS = styled.div`
  position: relative;
`;

const ButtonS = styled.button``;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const InputS = styled.input``;
