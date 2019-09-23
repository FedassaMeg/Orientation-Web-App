/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

const card = css`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default function Card(props) {
  return (
    <div css={card}>
      <CardHeader />
      <CardBody>{props.children}</CardBody>
    </div>
  );
}
