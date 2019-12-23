/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function CardHeader({ header }) {
  return <div css={cardHeader}>{header}</div>;
}

const cardHeader = css`
  padding: 16px;
  font: 16px "Roboto", san-serif;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
`;
