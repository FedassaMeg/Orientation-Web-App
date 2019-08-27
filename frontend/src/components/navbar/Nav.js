/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// emotion styles
// navigation links container styles
const nav = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default function Nav(props) {
  return <div css={nav}>{props.children}</div>;
}
