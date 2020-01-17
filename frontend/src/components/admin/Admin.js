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
      <AdminSidebar />
      <NavbarContainer admin />
      <div css={placeholder} />
      <div css={main}>
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
  padding-top: 50px;
`;

const main = css`
  min-height: 929px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
`;

const placeholder = css`
  width: 300px;
`;
