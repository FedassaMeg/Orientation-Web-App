/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function CardBody({ children }) {
  return <div css={container}>{children}</div>;
}
const container = css`
  padding: 24px;
`;
