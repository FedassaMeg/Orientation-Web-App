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
  padding-top: 8px;
  padding-bottom: 8px;

  border: none;
  //margin-top: 36px;
  background: none;
  font: 14px "Roboto", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  transition-duration: 0.4s;

  &:hover {
    background-color: whitesmoke;
  }
`;
