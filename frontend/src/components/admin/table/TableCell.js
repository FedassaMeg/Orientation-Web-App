/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableCell({ children, header }) {
  return (
    <div css={container}>
      {!header ? (
        <div css={left}>{children}</div>
      ) : (
        <div css={header}>{children}</div>
      )}
    </div>
  );
}

const container = css`
  flex-basis: 100px;
  flex-grow: 1;
  padding-top: 16px;
  padding-bottom: 16px;
`;
const header = css`
  text-align: left;
  font-weight: 600;
`;

const right = css`
  text-align: right;
`;
const left = css`
  text-align: left;
`;
const center = css`
  justify-self: center;
`;
