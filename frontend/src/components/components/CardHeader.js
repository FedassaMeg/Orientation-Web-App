/**@jsx jsx */

import { css, jsx } from "@emotion/core";

const cardheader = css`
  font: 32px "Open Sans", san-serif;
`;

export default function CardHeader(props) {
  return <div>{props.header}</div>;
}
