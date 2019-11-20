/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Handout(props) {
  return (
    <div>
      <div css={title}>{props.handout.title}</div>
      <hr css={divider} />
    </div>
  );
}

// Handout Title [div]
const title = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: rgb(252, 252, 252);
`;

// Horizontal Divider [hr]
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;
