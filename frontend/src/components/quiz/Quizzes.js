/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import Container from "../components/Container";
import Modules from "../components/Modules";

export default function Quizzes() {
  return (
    <Container>
      <div css={pageheader}>All Quizzes</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <div css={moduleCard}>
          <Modules
            title="Quiz Set 1"
            subtitle="Quizzes on Videos"
            list={[
              "HIPPA",
              "Sexual Harassment in Health Care",
              "Driving Safety",
              "Proper Body Mechanics",
              "Elder Abuse and Neglect",
              "Infection Control Bag Technique",
              "Blood Borne Pathogens",
              "Personal Safety for Home Health Caregivers"
            ]}
            key="videoquizzes"
            type="quiz"
          />
        </div>
        <div css={moduleCard}>
          <Modules
            title="Quiz Set 2"
            subtitle="Quizzes on Slides"
            list={[
              "Introduction to First Call",
              "Introduction to Hospice",
              "Visit Frequencies and Types",
              "Determining Hospice Eligibility",
              "Measuring Decline",
              "Managing Secretions",
              "Managing Nausea",
              "Misconceptions",
              "Death Anxiety"
            ]}
            key="slidequizzes"
            type="quiz"
          />
        </div>
        <div css={moduleCard}>
          <Modules
            title="Quiz Set 3"
            subtitle="Quizzes on Handouts"
            list={[
              "Foley Catheter Handouts",
              "Pulse Oximetry",
              "Venipuncture Handout"
            ]}
            key="handoutquizzes"
            type="quiz"
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
