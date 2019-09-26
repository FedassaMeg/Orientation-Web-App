/**@jsx jsx */

import { css, jsx } from "@emotion/core";

const cardHeader = css`
  font-size: 24px;
  font-weight: 600;
  padding: 8px;
  margin-left: 8px;
`;

export default function CardHeader(props) {
  return <div css={cardHeader}>{props.header}</div>;
}
