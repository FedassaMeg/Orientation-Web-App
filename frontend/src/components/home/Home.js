/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import HeaderBar from "./HeaderBar";
import DashboardContainer from "./DashboardContainer";

export default function Home() {
  return (
    <div css={container}>
      <HeaderBar />
      <DashboardContainer />
    </div>
  );
}

const container = css`
  flex-grow: 1;
  margin: auto;
  max-width: 120vmin;
  width: 100%;
`;
