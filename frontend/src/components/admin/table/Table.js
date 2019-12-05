/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Table(props) {
  return <div css={container}>{props.children}</div>;
}

const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
