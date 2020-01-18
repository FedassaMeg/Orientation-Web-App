/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

export default function Card({ header, line, width, children }) {
  const card = css`
    margin: 40px;
    width: ${width}px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  `;

  return (
    <div css={card}>
      {header && <CardHeader header={header} />}
      {line && <hr css={divider} />}
      <CardBody>{children}</CardBody>
    </div>
  );
}
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;
