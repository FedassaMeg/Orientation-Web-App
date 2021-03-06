/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Link } from "react-router-dom";

import {
  MdDashboard,
  MdAssignmentTurnedIn,
  MdAssessment,
  MdGroup,
  MdDescription
} from "react-icons/md";

export default function AdminSidebar({ url }) {
  return (
    <div css={sidebar}>
      <div css={sectionContainer}>
        <div css={sectionHead}>NAVIGATION</div>
        <div css={sectionRow}>
          <div css={linkRow}>
            <MdAssignmentTurnedIn />
            {"  "}
            <Link to={`${url}/review-scores`} css={link}>
              Review Scores
            </Link>
          </div>
          <div css={linkRow}>
            <MdAssessment />
            {"  "}
            <Link to={`${url}/reports`} css={link}>
              Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//emotion styling
const sidebar = css`
  position: fixed;
  color: white;
  width: 259px;
  min-height: 929px;
  background-color: #404045;
`;

const sectionContainer = css`
  margin-top: 48px;
  margin-left: 24px;
  margin-bottom: 48px;
`;

const sectionHead = css`
  font: 10px "Open Sans", san-serif;
  color: whitesmoke;
  margin-bottom: 24px;
`;

const sectionRow = css`
  margin-left: 12px;
`;

const linkRow = css`
  margin: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const link = css`
  font: 14px "Open Sans", san-serif;
  margin-left: 8px;
  color: white;

  &:hover {
    text-decoration: none;
    color: #289086;
  }
`;
