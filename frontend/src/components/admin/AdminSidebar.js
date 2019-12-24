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

export default function AdminSidebar() {
  return (
    <div css={sidebar}>
      <div css={sectionContainer}>
        <div css={sectionHead}>NAVIGATION</div>
        <div css={sectionRow}>
          <div css={linkRow}>
            <MdDashboard />
            {"  "}
            <span css={disabledlink}>Dashboard</span>
            {/* <Link to="/admin/dashboard" css={link}>
            Dashboard
            </Link> */}
          </div>
          <div css={linkRow}>
            <MdAssignmentTurnedIn />
            {"  "}
            <Link to="/admin/review-scores" css={link}>
              Review Scores
            </Link>
          </div>
          <div css={linkRow}>
            <MdAssessment />
            {"  "}
            <Link to="/admin/reports" css={link}>
              Reports
            </Link>
          </div>
        </div>
      </div>
      <hr css={divider} />
      <div css={sectionContainer}>
        <div css={sectionHead}>COMPONENTS</div>
        <div css={sectionRow}>
          <div css={linkRow}>
            <MdGroup />
            {"  "}
            <span css={disabledlink}>Administer Users</span>
            {/* <Link to="/admin/administer-users" css={link}>
              Administer Users
            </Link> */}
          </div>
          <div css={linkRow}>
            <MdDescription />
            {"  "}
            <span css={disabledlink}>Edit Content</span>
            {/* <Link to="/admin/edit-content" css={link}>
              Edit Content
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

//emotion styling
const sidebar = css`
  color: white;
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

const disabledlink = css`
  font: 14px "Open Sans", san-serif;
  margin-left: 8px;
  color: rgba(255, 255, 255, 0.3);
`;

const divider = css`
  margin: 0;
  border: 0.5px solid #606060;
`;
