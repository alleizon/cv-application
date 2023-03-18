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
  top: calc(100% + 20px);
  right: 20px;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 0px solid transparent;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  z-index: 40;

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
