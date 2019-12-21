/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import clsx from "clsx";

export default function Button(props) {
  const { onClick, children, ...rest } = props;
  return (
    <button onClick={onClick} css={button} {...rest}>
      {children}
    </button>
  );
}
// login button styles
const button = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  width: 80x;
  padding-top: 8px;
  padding-bottom: 8px;

  border: none;
  //margin-top: 36px;
  color: #606060;
  font: 14px "Roboto", sans-serif;
  font-weight: 300;
  background: none;
  transition-duration: 0.4s;

  &:hover {
    color: #202020;
    background-color: whitesmoke;
  }
`;
