/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function QuestionContent({ activeIndex, question }) {
  return (
    <div css={container}>
      <div css={number}>{activeIndex + 1}.</div>
      <div css={questionStyle}>{question} </div>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;

const font = css`
  font: 16px "Roboto", san-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;

const number = css`
  margin-right: 24px;
  ${font};
`;

const questionStyle = css`
  padding-bottom: 16px;
  ${font};
`;
