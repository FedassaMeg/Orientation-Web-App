/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import Navigation from "../navbar/Navigation";
export default function Admin() {
  return (
    <div css={container}>
      <div css={sidebar}>Sidebar</div>
      <div css={main}>
        <Navigation admin />
        <div>dashboard</div>
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: row;
`;

const sidebar = css`
  width: 350px;
  height: 100vh;
  background-color: ;
`;

const main = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
