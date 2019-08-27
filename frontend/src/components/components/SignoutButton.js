/**@jsx jsx */
import { css, jsx } from "@emotion/core";

const signoutBtn = css`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: #289086;
  color: white;
  font: 16px "Open Sans", san-serif;
`;

export default function SignoutButton(props) {
  return <button css={signoutBtn}>{props.children}</button>;
}
