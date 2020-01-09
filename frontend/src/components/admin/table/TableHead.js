/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableHead({ children }) {
  return <div css={container}>{children}</div>;
}

const container = css`
  display: table-head-group;
`;
