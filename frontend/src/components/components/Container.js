/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// emotion Styling
const content = css`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  min-width: 800px;
`;

export default function Container(props) {
  return <div css={content}>{props.children}</div>;
}
