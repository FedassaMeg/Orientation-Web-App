/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Link } from "react-router-dom";

export default function NavLink(props) {
  return (
    <Link to={props.href} css={navLink}>
      {props.children}
    </Link>
  );
}

//emotion styles
//Navigation link
const navLink = css`
  font: 16px "Roboto", san-serif;
  font-weight: 400;
  color: #5a5a5a;

  &:hover {
    color: #279186;
    text-decoration: none;
  }
`;
