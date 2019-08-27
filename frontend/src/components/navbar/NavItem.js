/**@jsx jsx */
import { css, jsx } from "@emotion/core";

const navitem = css`
  width: 72px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NavItem(props) {
  return <div css={navitem}>{props.children}</div>;
}
