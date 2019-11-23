/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Container(props) {
  return <div css={container}>{props.children}</div>;
}

const container = css`
  flex-grow: 1;
  margin: auto;
  //max-width: 120vmin;
  width: 100%;
`;
