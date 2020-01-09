/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableRow({ hover, head, ...other }) {
  return <div css={container} {...other} />;
}

const container = css`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0;
`;
