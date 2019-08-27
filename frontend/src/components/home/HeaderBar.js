/**@jsx jsx */

import { css, jsx } from "@emotion/core";

// emotion styling
const headerbar = css`
    background-color: #289086;
    width = 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
`;

const name = css`
  padding-left: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  font: 24px "Open Sans", san-serif;
  color: white;
`;

const role = css`
  padding-left: 18px;
  padding-top: 4px;
  padding-bottom: 4px;
  font: 18px "Open Sans", san-serif;
  color: white;
`;

export default function HeaderBar() {
  return (
    <div css={headerbar}>
      <div css={name}>John Johnson</div>
      <div css={role}>Nurse</div>
    </div>
  );
}
