/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// emotion styles
// Navbar main container
const navbar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Navbar(props) {
  return <div css={navbar}>{props.children}</div>;
}
