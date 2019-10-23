/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

export default function Card(props) {
  return (
    <div css={card}>
      <CardHeader header={props.header} />
      {props.line && <hr css={divider} />}
      <CardBody>{props.children}</CardBody>
    </div>
  );
}
const card = css`
  margin: 40px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;
