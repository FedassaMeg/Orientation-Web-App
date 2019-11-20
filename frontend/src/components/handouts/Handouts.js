/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "../components/Container";
import Modules from "../components/Modules";

export default function Handouts() {
  return (
    <Container>
      <div css={pageheader}>All Handouts</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <div css={moduleCard}>
          <Modules
            title="Handouts"
            subtitle="Competencies"
            list={[
              "Catheter Insertion and Care HO",
              "Catheter Irrigation",
              "MD order and Visit Note",
              "Oximetry",
              "Routine Venipuncture Procedure"
            ]}
            key="handouts"
            type="handout"
          />
        </div>
      </div>
    </Container>
  );
}

const maincontainer = css`
  padding: 0;
  margin: auto;
  max-width: 120vmin;
  width: 100%;
`;

const pageheader = css`
  font-family: "Raleway", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #fdfdfd;
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const cardscontainer = css`
  background-color: whitesmoke;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.15);
`;

const moduleCard = css`
  padding: 20px;
`;
