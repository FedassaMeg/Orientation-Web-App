/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import get from "lodash/get";

import QuizContainer from "../components/quiz/QuizContainer";
import Navigation from "../components/navbar/Navigation";

const quizzesLookup = {
  hippa: {
    key: 1,
    title: "HIPPA"
  },
  "sexual-harassment-in-health-care": {
    key: 2,
    title: "Sexual Harassment in Health Care"
  },
  "driving-safety": {
    key: 3,
    title: "Driving Safety"
  },
  "proper-body-mechanics": {
    key: 4,
    title: "Proper Body Mechanics"
  },
  "elder-abuse-and-neglect": {
    key: 5,
    title: "Elder Abuse and Neglect"
  },
  "infection-control-bag-technique": {
    key: 6,
    title: "Infection Control - Bag Technique"
  },
  "blood-borne-pathogens": {
    key: 7,
    title: "Blood Borne Pathogens"
  },
  "personal-safety-for-home-health-caregivers": {
    key: 8,
    title: "Personal Safety for Home Health Caregivers"
  },
  "introduction-to-first-call": {
    key: 10,
    title: "Introduction to First Call"
  },
  "introduction-to-hospice": {
    key: 11,
    title: "Introduction to Hospice"
  },
  "visit-frequencies-and-types": {
    key: 12,
    title: "Visit Frequencies and Types"
  },
  "determining-hospice-eligibility": {
    key: 13,
    title: "Determining Hospice Eligibility"
  },
  "measuring-decline": {
    key: 14,
    title: "Measuring Decline"
  },
  "managing-secretions": {
    key: 15,
    title: "Managing Secretions"
  },
  "managing-nausea": {
    key: 16,
    title: "Managing Nasuea"
  },
  misconceptions: {
    key: 17,
    title: "Misconceptions"
  },
  "death-anxiety": {
    key: 18,
    title: "Death Anxiety"
  }
};

export default function QuizPage({ match }) {
  const quiz = get(quizzesLookup, match.params.id);
  return (
    <div css={container}>
      <Navigation />
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
