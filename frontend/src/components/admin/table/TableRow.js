/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableRow(props) {
  return (
    <div css={container}>
      <div css={row}>{props.children}</div>
      <hr css={divider} />
    </div>
  );
}

const container = css``;

const row = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const divider = css`
  margin: 0px;
  border-width: 1px;
`;
