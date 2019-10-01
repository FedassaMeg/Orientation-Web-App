/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { MdCheckCircle, MdCancel } from "react-icons/md";

import Card from "../components/Card";

export default function Dashboard(props) {
  const quizCompleted = props.compltArray;
  const quizProgress = props.quizArray.map(quiz => {
    let isCompleted = false;
    return (
      <div css={listSection}>
        <div css={listRight}>
          {quizCompleted.map(score => {
            quiz.id === score.related_quiz
              ? (isCompleted = true)
              : (isCompleted = isCompleted);
          })}
          {isCompleted ? (
            <div css={check}>
              <MdCheckCircle />
            </div>
          ) : (
            <div css={cancel}>
              <MdCancel />
            </div>
          )}

          <div css={list}>{quiz.title}</div>
        </div>
      </div>
    );
  });
  const slideCompleted = props.comArray;
  const slideProgress = props.slideArray.map(slide => {
    let isCompleted = false;
    return (
      <div css={listSection}>
        <div css={listRight}>
          {slideCompleted.map(score => {
            slide.id === score.slide
              ? (isCompleted = true)
              : (isCompleted = isCompleted);
          })}
          {isCompleted ? (
            <div css={check}>
              <MdCheckCircle />
            </div>
          ) : (
            <div css={cancel}>
              <MdCancel />
            </div>
          )}

          <div css={list}>{slide.title}</div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div css={pageheader}>My Dashboard</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <Card header="Slides">{slideProgress}</Card>
        <Card header="Quizzes">{quizProgress}</Card>
      </div>
    </div>
  );
}

const pageheader = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: rgb(252, 252, 252);
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const cardscontainer = css`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: 1;
`;

const listSection = css`
  font-size: 16px;
  font-weight: 400;
  padding-top: 8px;
  padding-left: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const listRight = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const check = css`
  margin-right: 16px;
  padding-bottom: 4px;
  color: green;
`;
const cancel = css`
  margin-right: 16px;
  padding-bottom: 4px;
  color: red;
`;
const list = css`
  padding: 0;
`;
