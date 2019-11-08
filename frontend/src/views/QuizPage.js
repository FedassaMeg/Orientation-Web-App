/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import get from "lodash/get";

import QuizContainer from "../components/quiz/QuizContainer";
import NavbarContainer from "../components/navbar/NavbarContainer";

const quizzesLookup = {
  hippa: {
    key: 1,
    title: "HIPPA",
    group: 1
  },
  "sexual-harassment-in-health-care": {
    key: 2,
    title: "Sexual Harassment in Health Care",
    group: 1
  },
  "driving-safety": {
    key: 3,
    title: "Driving Safety",
    group: 1
  },
  "proper-body-mechanics": {
    key: 4,
    title: "Proper Body Mechanics",
    group: 1
  },
  "elder-abuse-and-neglect": {
    key: 5,
    title: "Elder Abuse and Neglect",
    group: 2
  },
  "infection-control-bag-technique": {
    key: 6,
    title: "Infection Control - Bag Technique",
    group: 2
  },
  "blood-borne-pathogens": {
    key: 7,
    title: "Blood Borne Pathogens",
    group: 2
  },
  "personal-safety-for-home-health-caregivers": {
    key: 8,
    title: "Personal Safety for Home Health Caregivers",
    group: 2
  },
  "introduction-to-first-call": {
    key: 10,
    title: "Introduction to First Call",
    group: 1
  },
  "introduction-to-hospice": {
    key: 11,
    title: "Introduction to Hospice",
    group: 1
  },
  "visit-frequencies-and-types": {
    key: 12,
    title: "Visit Frequencies and Types",
    group: 1
  },
  "determining-hospice-eligibility": {
    key: 13,
    title: "Determining Hospice Eligibility",
    group: 1
  },
  "measuring-decline": {
    key: 14,
    title: "Measuring Decline",
    group: 1
  },
  "managing-secretions": {
    key: 15,
    title: "Managing Secretions",
    group: 1
  },
  "managing-nausea": {
    key: 16,
    title: "Managing Nasuea",
    group: 1
  },
  misconceptions: {
    key: 17,
    title: "Misconceptions",
    group: 1
  },
  "death-anxiety": {
    key: 18,
    title: "Death Anxiety",
    group: 1
  }
};

export default function QuizPage({ match }) {
  const quiz = get(quizzesLookup, match.params.id);
  return (
    <div css={container}>
      <NavbarContainer />
      <QuizContainer quiz={quiz} />
    </div>
  );
}

const container = css`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
