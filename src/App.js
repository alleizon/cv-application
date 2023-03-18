import { Component } from "react";
import Header from "./components/Header/Header";
import BodyLeft from "./components/BodyLeft/BodyLeft";
import BodyRight from "./components/BodyRight/BodyRight";
import PreviewButton from "./components/PreviewButton";
import BackButton from "./components/BackButton";
import InfoButton from "./components/InfoButton";
import styled from "styled-components";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      preview: false,
    };
    this.handlePreview = this.handlePreview.bind(this);
  }

  handlePreview() {
    const buttons = [...document.querySelectorAll("button:not(.control)")];
    buttons.forEach((button) => {
      if (this.state.preview) {
        button.classList.remove("hide");
      } else button.classList.add("hide");
    });
    this.setState({ preview: !this.state.preview });
  }

  render() {
    return (
      <AppS $display={this.state.preview}>
        <ButtonContainer>
          <InfoButton button={ViewButton} />
          <PreviewButton
            handlePreview={this.handlePreview}
            button={ViewButton}
          />
          <BackButton
            handlePreview={this.handlePreview}
            preview={this.state.preview}
          />
        </ButtonContainer>

        <Header />
        <BodyLeft />
        <BodyRight />
      </AppS>
    );
  }
}

const AppS = styled.div`
  position: relative;
  display: grid;
  height: 100vh;
  grid-template-rows: 20% repeat(3, minmax(max-content, 1fr));
  grid-template-columns: 1fr 1.5fr;
  gap: 20px 10px;

  ${({ $display }) => ($display ? "margin-top: 0px" : "margin-top: 100px")}
`;

const ViewButton = styled.button`
  flex: 1;
  background-color: #94fbff;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    background-color: var(--gray-color);
    color: white;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 100%;
  height: 100px;
  width: 100%;
  display: flex;
  border-bottom: 2px solid black;
  background-color: black;
  gap: 2px;
`;

console.clear();
