/** @jsx jsx */

import { css, jsx } from "@emotion/core";

import QuestionList from "../question/QuestionList";

export default function QuizPage() {
  return (
    <div>
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
        HIPPA
      </div>

      <hr />
      <div>
        <QuestionList />
      </div>
    </div>
  );
}
