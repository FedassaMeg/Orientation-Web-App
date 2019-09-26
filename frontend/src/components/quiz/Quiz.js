/** @jsx jsx */

import { css, jsx } from "@emotion/core";

import QuestionList from "../question/QuestionList";

export default function Quiz(props) {
  return (
    <div css={container}>
      <div
        css={css`
          font-family: "Noto Sans JP", sans-serif;
          font-size: 45px;
          padding-left: 90px;
          color: rgb(78, 78, 78);
          width: 100%;
          padding-bottom: 10px;
          background-color: rgb(252, 252, 252);
        `}
      >
        {props.quiz.title}
      </div>

      <hr css={divider} />
      <div css={body}>
        <QuestionList quizId={props.quiz.key} />
      </div>
    </div>
  );
}

const container = css`
  flex-grow: 1;
  align-self: center;
  max-width: 120vmin;
  width: 100%;
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const body = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  width: 100%;
  height: 100%;
`;
