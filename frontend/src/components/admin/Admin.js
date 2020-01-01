/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Route } from "react-router-dom";

//Local components
import AdminSidebar from "./AdminSidebar";
import NavbarContainer from "../navbar/NavbarContainer";
import ReviewScoresContainer from "./ReviewScoresContainer";
import ReportsContainer from "./ReportsContainer";

export default function Admin() {
  return (
    <div css={container}>
      <div css={sidebar}>
        <div css={adminHeader}>ADMIN PANEL</div>
        <AdminSidebar />
      </div>
      <div css={main}>
        <NavbarContainer admin />
        <Route
          path="/site-admin/review-scores"
          component={ReviewScoresContainer}
        />
        <Route path="/site-admin/reports" component={ReportsContainer} />
      </div>
    </div>
  );
}

// emotion styling
const container = css`
  display: flex;
  flex-direction: row;
`;

const sidebar = css`
  width: 260px;
  min-height: 100vh;
  background-color: #404045;
`;

const adminHeader = css`
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 36px;
  font: 20px "Open Sans", san-serif;
  color: white;
  background-color: #353538;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
`;

const main = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`;
