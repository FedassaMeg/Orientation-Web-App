/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import IconButton from "@material-ui/core/IconButton";

import { MdDone, MdClear } from "react-icons/md";

//Local components
import Card from "../components/Card";
import Button from "../components/Button";

export default function ReviewQuiz(props) {
  const {
    quizId,
    scoreId,
    back,
    questions,
    userAns,
    handleCorrect,
    handleWrong,
    handleSubmit,
    isSubmitted,
    isCorrect
  } = props;

  const list = questions.map((question, index) => {
    return userAns.map(ans => {
      if (question.id == ans.question) {
        const corrected = isCorrect.get(question.id);
        return (
          <div css={row}>
            <div css={content}>
              <div css={question}>
                <span css={qstSpan}>Question {index + 1}: </span>
                {question.question}
              </div>
              <div css={answer}>
                <span css={ansSpan}>User Answer: </span>
                {question.type === "SA"
                  ? ans.short_answer
                  : question.type === "TF"
                  ? ans.true_or_false.toString()
                  : question.type === "MC"
                  ? ans.multiple_choice
                  : "Invalid Answer!"}
              </div>
            </div>
            <div>
              <IconButton
                aria-label="right"
                color="primary"
                id={question.id}
                onClick={handleCorrect}
              >
                <MdDone />
              </IconButton>
              <IconButton
                aria-label="wrong"
                color="secondary"
                id={question.id}
                onClick={handleWrong}
              >
                <MdClear />
              </IconButton>
            </div>
          </div>
        );
      }
    });
  });

  return (
    <Card>
      <div css={container}>
        {list}
        <div css={action}>
          <Button onClick={back}>Back</Button>
          {isSubmitted ? (
            <Button disabled>Reviewed!</Button>
          ) : (
            <Button onClick={handleSubmit}>Done</Button>
          )}
        </div>
      </div>
    </Card>
  );
}

// emotion styling
const container = css`
  padding: 16px;
`;
const content = css`
  flex-basis: 600px;
`;

const backBtn = css`
  margin: 16px;
  border: none;
  background-color: gold;
  padding: 4px 12px;
  font: 16px "Roboto", san-serif;
  color: white;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const doneBtn = css`
  margin: 16px;
  border: none;
  background-color: dodgerblue;
  padding: 4px 12px;
  font: 16px "Roboto", san-serif;
  font-weight: 500;
  color: white;
  &:focus {
    outline: none;
  }
`;

const row = css`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const question = css``;

const wrong = css`
  background-color: coral;
`;

const qstSpan = css`
  font-weight: 500;
`;

const answer = css``;

const ansSpan = css`
  font-weight: 500;
`;

const action = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
