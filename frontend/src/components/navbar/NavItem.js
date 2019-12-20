/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function NavItem(props) {
  return <div css={navItem}>{props.children}</div>;
}

//emotion styles
//Container for navigation links
const navItem = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 50px;
`;
