/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { Switch, Route } from "react-router-dom";
import Navigation from "../navbar/Navigation";
import AdminSidebar from "./AdminSidebar";
import AdminReviewScores from "./AdminReviewScores";
import AdminEditContent from "./AdminEditContent";
export default function Admin(props) {
  return (
    <div css={container}>
      <div css={sidebar}>
        <div css={adminHeader}>ADMIN PANEL</div>
        <AdminSidebar />
      </div>
      <div css={main}>
        <Navigation admin />

        <Route path="/admin/dashboard" render={() => <h3>Dashboard</h3>} />
        <Route path="/admin/review-scores" component={AdminReviewScores} />
        <Route path="/admin/reports" render={() => <h3>Reports</h3>} />
        <Route path="/admin/edit-content" component={AdminEditContent} />
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: row;
`;

const sidebar = css`
  width: 240px;
  min-height: 100vh;
  background-color: #404045;
`;

const adminHeader = css`
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 24px;
  font: 20px "Open Sans", san-serif;
  color: white;
  background-color: #353538;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
`;

const main = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
