import { Component } from "react";
import styled from "styled-components";

export default class BackButton extends Component {
  render() {
    return (
      <BackButtonS
        className="control back"
        onClick={this.props.handlePreview}
        $display={this.props.preview}
      >
        <i className="fa-solid fa-left-long"></i>
      </BackButtonS>
    );
  }
}

const BackButtonS = styled.button`
  top: 40px;
  right: 100px;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  z-index: 40;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    scale: 1.2;
  }

  i {
    font-size: 1.2rem;
  }

  ${({ $display }) => {
    console.log($display);
    return $display ? "display: block" : "display: none";
  }}
`;
