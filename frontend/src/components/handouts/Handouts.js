/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Container from "../components/Container";
import Modules from "../components/Modules";

const handoutsArr = [
  {
    title: "Catheter Insertion and Care HO",
    url_value: "catheter-insertion-and-care-ho"
  },
  { title: "Catheter Irrigation", url_value: "foley-catheters" },
  { title: "Oximetry", url_value: "pulse-oximetry" },
  {
    title: "Routine Venipuncture Procedure",
    url_value: "venipuncture"
  }
];

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
            list={handoutsArr}
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
  font-family: "Fira Sans", sans-serif;
  font-size: 48px;
  font-weight: 200;
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
