/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import Card from "../components/Card";

export default function Slides() {
  return (
    <div css={maincontainer}>
      <Container>
        <div css={pageheader}>ALL SLIDES</div>
        <hr />
        <div css={cardscontainer}>
          <Link to="slide/introduction-to-first-call-hospice">
            <Card>Intro to First Call</Card>
          </Link>
          <Card />
        </div>
      </Container>
    </div>
  );
}

const maincontainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const pageheader = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: rgb(252, 252, 252);
`;

const cardscontainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
