/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "../components/Container";
import Card from "../components/Card";

const maincontainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const pageheader = css`
  font: 48px "Open Sans", san-serif;
  font-weight: 300;
  font-style: italic;
`;

const cardscontainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Dashboard() {
  return (
    <div css={maincontainer}>
      <Container>
        <div css={pageheader}>My Dashboard</div>
        <div css={cardscontainer}>
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  );
}
