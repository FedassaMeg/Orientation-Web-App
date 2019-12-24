/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import clsx from "clsx";

export default function Button(props) {
  const { onClick, children, disabled, ...rest } = props;
  return (
    <div>
      {!disabled ? (
        <button onClick={onClick} css={button} {...rest}>
          {children}
        </button>
      ) : (
        <button css={disabledBtn} disabled>
          {children}
        </button>
      )}
    </div>
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
  margin: 0;
  background: none;
  font: 14px "Roboto Condensed", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  transition-duration: 0.4s;

  &:hover {
    background-color: whitesmoke;
  }
`;

const disabledBtn = css`
  ${button};
  color: rgba(0, 0, 0, 0.3);
`;
