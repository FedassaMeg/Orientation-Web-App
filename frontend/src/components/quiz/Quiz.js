/** @jsx jsx */

import { css, jsx } from "@emotion/core";

import QuestionList from "../question/QuestionList";

export default function Quiz(props) {
  return (
    <div css={container}>
      <div css={title}>{props.quiz.title}</div>

      <hr css={divider} />
      <form css={body} onSubmit={props.handleSubmit}>
        <QuestionList
          quizId={props.quiz.key}
          questions={props.questions}
          onChange={props.handleChange}
        />
        <button type="submit" css={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

const container = css`
  flex-grow: 1;
  align-self: center;
  max-width: 120vmin;
  width: 100%;
  padding-bottom: 64px;
`;

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

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const body = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 24px;
`;

const submit = css`
  margin-top: 36px;
  margin-right: 40px;
  width: 80px;
  align-self: flex-end;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: coral;
  color: white;
  font: 16px "Open Sans", sans-serif;
  font-weight: 600;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  }
`;
