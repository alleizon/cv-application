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
  }

  showModal() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <>
        {this.state.modal && (
          <ModalWrapper onClick={this.showModal}>
            <Modal>
              <h1>INFO</h1>
              <Ul>
                <li>Click on INPUT to write your CV</li>
                <li>
                  Click on <i className="fa-solid fa-circle-info"></i>
                  to open this info
                </li>
                <li>Click on PREVIEW to preview your CV</li>
                <li>
                  While in input mode, click on a field to edit it, click on{" "}
                  <i className="fa-solid fa-plus"></i>
                  to add entries or fields or click and{" "}
                  <i className="fa-solid fa-xmark"></i> to remove entries
                </li>
                <li>
                  While in input mode, click on a field and remove the text to
                  delete it
                </li>
              </Ul>
              <CloseButton onClick={this.showModal}>
                <i className="fa-solid fa-xmark"></i>{" "}
              </CloseButton>
            </Modal>
          </ModalWrapper>
        )}
        <this.button onClick={this.showModal} className="control">
          <i
            style={{ fontSize: "3rem" }}
            className="fa-solid fa-circle-info"
          ></i>
        </this.button>
      </>
    );
  }
}

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Modal = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(240deg, #b3b3b3, #ffffff);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #0000007d;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;
  margin-left: 20px;
  list-style: disc;
`;

const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  background-color: #0000004d;
`;
