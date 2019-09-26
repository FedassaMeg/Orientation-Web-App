/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Quizzes from "../components/quiz/Quizzes";
import Navigation from "../components/navbar/Navigation";

export default function QuizPage() {
  return (
    <div css={container}>
      <Navigation />
      <Quizzes />
    </div>
  );
}
const container = css`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
