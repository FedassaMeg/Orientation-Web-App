/**@jsx jsx */
import { css, jsx } from "@emotion/core";

const navLink = css`
  font: 16px "Open Sans", san-serif;
  color: #5a5a5a;

  &:hover {
    color: #1f1f1f;
    text-decoration: none;
  }
`;

export default function NavLink(props) {
  return (
    <a href={props.href} css={navLink}>
      {props.children}
    </a>
  );
}
