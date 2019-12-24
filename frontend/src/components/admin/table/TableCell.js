/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableCell({ children, header }) {
  return (
    <div css={container}>
      {!header ? (
        <div css={left}>{children}</div>
      ) : (
        <div css={headerStyle}>{children}</div>
      )}
    </div>
  );
}

const container = css`
  flex-basis: 100px;
  flex-grow: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
`;
const headerStyle = css`
  text-align: left;
  font: 14px "Roboto Condensed", san-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

const right = css`
  text-align: right;
`;
const left = css`
  text-align: left;
  font: 14px "Roboto Condensed", san-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
const center = css`
  justify-self: center;
`;
