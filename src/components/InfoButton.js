import { Component } from "react";
import styled from "styled-components";

export default class InfoButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.button = this.props.button;
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    if (e.target.id !== "modal-wrapper" && e.currentTarget.tagName !== "BUTTON")
      return;
    this.setState({ modal: false });
    document.querySelector("#info-modal").classList.remove("active");
  }

  showModal() {
    this.setState({ modal: true });
    setTimeout(() => {
      document.querySelector("#info-modal").classList.add("active");
    }, 0);
  }

  render() {
    return (
      <>
        <ModalWrapper
          id="modal-wrapper"
          $display={this.state.modal}
          onClick={this.closeModal}
        >
          <Modal id="info-modal">
            <H1>
              INFO{" "}
              <CloseButton onClick={this.closeModal}>
                <i className="fa-solid fa-xmark"></i>{" "}
              </CloseButton>
            </H1>
            <Ul>
              <li>
                Click on a field to edit it, click on{" "}
                <i className="fa-solid fa-plus"></i>
                to add entries or fields inside a section, or click on{" "}
                <i className="fa-solid fa-xmark"></i> to remove entries
              </li>
              <li>
                Click on a field (for education/skills/work experience) and
                remove the text to delete it
              </li>
              <li>Click on PREVIEW to preview your CV</li>
              <li>
                Click on <i className="fa-solid fa-circle-info"></i>
                to open this info
              </li>
            </Ul>
          </Modal>
        </ModalWrapper>

        <this.button onClick={this.showModal} className="control">
          <i className="fa-solid fa-circle-info"></i>
        </this.button>
      </>
    );
  }
}

const CloseButton = styled.button`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 50px;
  font-size: 40px;
  background-color: transparent;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgb(0 130 135);
  }
`;

const H1 = styled.h1`
  padding: 20px;
  font-size: 25px;
  text-align: center;
  letter-spacing: 2px;
  background-color: rgb(0 201 208);
  border-radius: 5px 5px 0 0;
  position: relative;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #00000030;
  max-width: 500px;
  transition: all 0.1s ease-in-out;
  transform: translate(-50%, -50%) scale(0.5);

  &.active {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 30px 30px 50px;
  list-style: disc;

  i {
    margin: 0px 5px;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 50;
  background-color: #0000004d;
  ${({ $display }) => ($display ? "display:block" : "display:none")}
`;
