/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableBody({ children }) {
  return <div css={container}>{children}</div>;
}

const container = css`
  display: table-row-group;
`;
