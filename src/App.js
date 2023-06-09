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
      <>
        {this.state.preview ? (
          <BackButton
            handlePreview={this.handlePreview}
            preview={this.state.preview}
          />
        ) : (
          <ButtonContainer $preview={this.state.preview} id="control-buttons">
            <InfoButton button={ViewButton} />
            <PreviewButton
              handlePreview={this.handlePreview}
              button={ViewButton}
            />
          </ButtonContainer>
        )}
        <Wrapper>
          <AppS>
            <Header />
            <BodyLeft />
            <BodyRight />
          </AppS>
        </Wrapper>
      </>
    );
  }
}

const AppS = styled.div`
  margin: 20px 15%;
  box-shadow: 1px 1px 5px #0000004a;
  border: 1px solid gray;
  overflow-y: scroll;
  background-color: #e5feff;
  position: relative;
  display: grid;
  height: 100vh;
  max-width: 1400px;
  grid-template-rows: 20% repeat(3, minmax(max-content, 1fr));
  grid-template-columns: 1fr 1.5fr;
  gap: 20px 10px;

  & > div {
    padding: 20px 15%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  & > div > h1 {
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  & > div:not(#header) > h1 {
    margin-bottom: 2rem;
  }
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
  height: 100px;
  border-bottom: 2px solid black;
  background-color: black;
  gap: 2px;

  ${({ $preview }) => ($preview ? "display: none" : "display: flex")}
`;

const Wrapper = styled.div`
  padding-top: 20px;
`;

// console.clear();
