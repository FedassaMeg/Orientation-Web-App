/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Nav(props) {
  return <div css={nav}>{props.children}</div>;
}

// emotion styles
//Container for right section of the navbar
const nav = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
