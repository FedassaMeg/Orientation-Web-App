/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import Navigation from "../navbar/Navigation";
export default function Admin() {
  return (
    <div css={container}>
      <div css={sidebar}>
        <div css={adminHeader}>Site Administration</div>
      </div>
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
  background-color: #404045;
`;

const adminHeader = css`
  height: 48.5px;
  padding: 10px;
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
