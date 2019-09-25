/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import Card from "../components/Card";
import Modules from "../components/Modules";

export default function Slides() {
  return (
    <div>
      <div css={maincontainer}>
        <div css={pageheader}>ALL SLIDES</div>
        <hr css={divider} />
        <div css={cardscontainer}>
          <div css={moduleCard}>
            <Modules
              title="Module 1"
              subtitle="Introduction to First Call"
              list={["Introduction to First Call Hospice"]}
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              title="Module 2"
              subtitle="Competencies"
              list={[
                "Foley Catheter Handouts",
                "Oximetry Handout",
                "Venipuncture Handout"
              ]}
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              title="Module 4"
              subtitle="Introduction to Hospice"
              list={[
                "Introduction to Hospice",
                "Admission Handbook",
                "Hospice in Care Facilities",
                "Patient's Rights",
                "Case Study",
                "Fall Prevention and Post Fall Visit",
                "Communication Techniques",
                "Communication Scenarios",
                "Role of the IDG",
                "IDG Experience Model",
                "Hospice Aide - Role and Responsibility",
                "Self Care and Care Assignment",
                "Discharges, Revocations, Transfers",
                "Hospice Aide Supervisory Visits"
              ]}
              key="introductiontohospice"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              title="Module 5"
              subtitle="Documentation"
              list={[
                "Problem Oriented Charting SOCP",
                "Visit Frequencies",
                "Visits SOC VR V15",
                "PRN Visit",
                "24 Hour Follow-up Visits",
                "Pronouncement Visits"
              ]}
              key="documentation"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              title="Module 6"
              subtitle="Documenting Decline"
              list={[
                "Determining Hospice Eligibility",
                "Measuring Decline - Scales",
                "Nutrition Documentation Decline"
              ]}
              key="documentingdecline"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              title="Module 7"
              subtitle="Symptom Management"
              list={[
                "Cough",
                "Secretions",
                "Nausea and Vomiting",
                "Diabetes",
                "Constipation-Bowel Care",
                "Signs of Impending Death",
                "Wound Care",
                "Pain Management Part 1",
                "Pain Management Part 2",
                "Pain Management Part 3",
                "Using Pain Medications in Hospice",
                "Medication Management",
                "Existential Distress",
                "Grief and Loss",
                "Delerium",
                "Death Anxiety",
                "Interventions",
                "Anxiety Treatment"
              ]}
              key="symptommanagement"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              title="Module 8"
              subtitle="Plan of Care"
              list={[
                "Hospice Plan of Care",
                "Self Care Deficit",
                "Impaired Nutritional Status"
              ]}
              key="planofcare"
              type="slide"
            />
          </div>
          <div css={moduleCard}>
            <Modules
              title="Module 9"
              subtitle="On Call is a Partnership"
              list={[
                "Best Practices for RNCMs, and Recognizing Imminent Status"
              ]}
              key="oncallisapartnership"
              type="slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const maincontainer = css`
  padding: 0;
  margin: auto;
  max-width: 120vmin;
  width: 100%;
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
`;

const moduleCard = css`
  padding: 20px;
`;
