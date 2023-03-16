import { Component } from "react";
import Header from "./components/Header/Header";
import BodyLeft from "./components/BodyLeft/BodyLeft";
import BodyRight from "./components/BodyRight/BodyRight";
import styled from "styled-components";

export default class App extends Component {
  render() {
    return (
      <AppS>
        <Header />
        <BodyLeft />
        <BodyRight />
      </AppS>
    );
  }
}

const AppS = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 20% 20% 20% 40%;
  grid-template-columns: 40% 60%;
`;

console.clear();
