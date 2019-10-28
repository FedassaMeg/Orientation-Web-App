/**@jsx jsx */

import { Component } from "react";
import { css, jsx } from "@emotion/core";
import {
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import { Link } from "react-router-dom";

export default class Module extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { modal: false };
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  kebabCase = str =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
      .filter(Boolean)
      .map(x => x.toLowerCase())
      .join("-");
  render() {
    let array = this.props.list;
    let moduleList = array.map(list => {
      return (
        <a href={list.url} target="blank" css={link}>
          <ListGroupItem>{list.title}</ListGroupItem>
        </a>
      );
    });
    return (
      <div css={shell}>
        <div css={topBar} />
        <div css={cardContainer}>
          <button onClick={this.toggle} css={buttonCard}>
            <div css={cardContent}>
              <div css={cardBody}>
                <div css={moduleTitle}>{this.props.title}</div>
                <br />
                <div css={moduleSubtitle}>{this.props.subtitle}</div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                  <ModalHeader toggle={this.toggle} css={modalHeader}>
                    <div css={modalTitle}>{this.props.title}</div>
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
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  transition-duration: 0.7s;

  &:hover {
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

const topBar = css`
  width: 100%;
  height: 8px;
  background-color: teal;
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
