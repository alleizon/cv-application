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
  grid-template-rows: 20% repeat(3, minmax(max-content, 1fr));
  grid-template-columns: 40% 60%;
`;

console.clear();
