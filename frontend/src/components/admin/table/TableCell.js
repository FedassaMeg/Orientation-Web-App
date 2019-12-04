/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableCell(props) {
  return (
    <div css={container}>
      <div css={right}>{props.children}</div>
    </div>
  );
}

const container = css`
  flex-basis: 100px;
  flex-grow: 1;
  padding-top: 16px;
  padding-bottom: 16px;
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
