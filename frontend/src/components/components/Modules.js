/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Fragment, useState } from "react";

import { Link } from "react-router-dom";

import {
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

export default function Module(props) {
  const { title, subtitle, list, handleOnClick, type } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  let moduleList = list.map((item, index) => (
    <Fragment key={index}>
      {type === "slide" ? (
        <a href={item.url} target="blank" css={link}>
          <ListGroupItem id={item.id} url={item.url} onClick={handleOnClick}>
            {item.title}
          </ListGroupItem>
        </a>
      ) : (
        <Link to={`${type}/${item.url}`} css={link}>
          <ListGroupItem>{item.title}</ListGroupItem>
        </Link>
      )}
    </Fragment>
  ));
  return (
    <div css={shell}>
      <div css={topBar} />
      <div css={cardContainer}>
        <button onClick={toggle} css={buttonCard}>
          <div css={cardContent}>
            <div css={cardBody}>
              <div css={moduleTitle}>{title}</div>
              <br />
              <div css={moduleSubtitle}>{subtitle}</div>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} css={modalHeader}>
                  <div css={modalTitle}>{title}</div>
                </ModalHeader>
                <ModalBody css={modalBody}>
                  <ListGroup flush>{moduleList}</ListGroup>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

const link = css`
  text-decoration: none;
  color: grey;
  &:link {
    text-decoration: none;
    color: grey;
  }
  &:visited {
    text-decoration: none;
    color: grey;
  }
  &:hover {
    text-decoration: none;
    color: black;
  }
  &:active {
    text-decoration: none;
    color: grey;
  }
`;

const shell = css`
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  transition-duration: 0.7s;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

const topBar = css`
  width: 100%;
  height: 8px;
  background-color: #289086;
`;

const cardContainer = css`
  width: 100%;
  height: 100%;
`;

const buttonCard = css`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;

const cardContent = css`
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const cardBody = css`
  padding: 0;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const moduleTitle = css`
  font-size: 20px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
  text-align: left;
`;
const moduleSubtitle = css`
  font-size: 30px;
  font-family: "Noto Sans JP", sans-serif;
  font-style: italic;
  text-align: left;
`;

const modalHeader = css`
  background-color: teal;
`;

const modalTitle = css`
  font-size: 20px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
  text-align: left;
  color: white;
`;

const modalBody = css`
  padding: 0;
  margin-top: 15px;
  margin-bottom: 15px;
`;
