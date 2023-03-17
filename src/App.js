import { Component } from "react";
import Header from "./components/Header/Header";
import BodyLeft from "./components/BodyLeft/BodyLeft";
import BodyRight from "./components/BodyRight/BodyRight";
import PreviewButton from "./components/PreviewButton";
import InputButton from "./components/InputButton";
import InfoButton from "./components/InfoButton";
import styled from "styled-components";

export default class App extends Component {
  render() {
    return (
      <AppS>
        <ButtonContainer>
          <InputButton button={ViewButton} />
          <InfoButton button={ViewButton} />
          <PreviewButton button={ViewButton} />
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
  margin-top: 100px;
  height: 100vh;
  grid-template-rows: 20% repeat(3, minmax(max-content, 1fr));
  grid-template-columns: 40% 60%;
`;

const ViewButton = styled.button`
  flex: 1;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 100%;
  height: 100px;
  width: 100%;
  display: flex;
`;

console.clear();
