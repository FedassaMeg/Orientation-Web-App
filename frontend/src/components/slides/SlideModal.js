/**@jsx jsx */
import { Component } from "react";
import { jsx, css } from "@emotion/core";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalCarousel from "./ModalCarousel";

export default class SlideModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <button css={button} onClick={this.toggle}>
          {this.props.buttonLabel}
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          size={this.props.size}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody css={body}>
            <ModalCarousel />
          </ModalBody>
          <ModalFooter>
            <div css={footer}>
              Use the left and right arrow keys to move between slides.{" "}
            </div>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const button = css`
  background: teal;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Noto Sans JP", sans-serif;
  padding: 7px;
  margin-bottom: 0px;
`;

const body = css`
  padding: 0;
`;

const footer = css`
  font-family: "Noto Sans JP", sans-serif;
  font-style: italic;
  color: orangered;
`;
