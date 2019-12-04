/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableHead(props) {
  return <div css={container}>{props.children}</div>;
}

const container = css``;
