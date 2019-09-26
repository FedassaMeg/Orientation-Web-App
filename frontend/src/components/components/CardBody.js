/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function CardBody(props) {
  return <div css={container}>{props.children}</div>;
}
const container = css`
  padding-top: 8px;
  padding-bottom: 20px;
  padding-right: 32px;
`;
