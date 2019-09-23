/** @jsx jsx */

import { css, jsx } from "@emotion/core";

export default function PageHeader(props) {
  return (
    <div css={headerContainer}>
      <div css={headerMain}>{props.header}</div>
      <div css={slideTitle}>{props.title}</div>
    </div>
  );
}

const headerContainer = css`
  width: 100%;
  margin-bottom: 0;
  padding-top: 2px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 10px;
  background-color: rgb(252, 252, 252);
`;

const headerMain = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  margin-left: 90px;
  color: rgb(78, 78, 78);
`;

const slideTitle = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  font-style: italic;
  font-weight: 300;
  margin-left: 24px;
  color: rgb(78, 78, 78);
`;
