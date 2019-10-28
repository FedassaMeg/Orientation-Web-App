/**@jsx jsx */
import { useState } from "react";
import { jsx, css } from "@emotion/core";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import ModalCarousel from "./ModalCarousel";

export default function SlideModal(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div css={container}>
      <button css={button} onClick={toggle}>
        {props.buttonLabel}
      </button>
      <Modal isOpen={modal} toggle={toggle} size={props.size} css={modalSize}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody css={body}>
          <ModalCarousel id={props.id} array={props.array} />
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

const container = css`
  margin-bottom: 8px;
`;

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

const modalSize = css`
  width: 962px;
`;
