/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Navbar(props) {
  return <div css={navbar}>{props.children}</div>;
}

// emotion styles
// Navbar main container
const navbar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 50px;
  z-index: 1;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
`;
