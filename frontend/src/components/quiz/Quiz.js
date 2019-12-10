/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//React-Icons Components
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

//Local Components
import { useQuiz } from "./QuizContext";
import Question from "../question/Question";
import ReviewAnswers from "./ReviewAnswers";

//Material UI JSS
const useStyles = makeStyles(theme => ({
  button: {
    "&:focus": { outline: 0 }
  }
}));

export default function Quiz(props) {
  const classes = useStyles();
  const { data } = useQuiz();
  return (
    <>
      {!props.isCompleted ? (
        <div css={container}>
          <div css={title}>
            <div css={titleText}>{data.quiz.title}</div>
          </div>
          <hr css={divider} />
          <div css={questionContainer}>
            <div css={qstNum}>
              <span css={qstNumText}>
                {props.activeIndex + 1} OF {data.questions.length}
              </span>
            </div>
            <Question
              activeIndex={props.activeIndex}
              answers={props.answers}
              handleOnChange={props.handleOnChange}
            />
            <div css={btnGroup}>
              {!props.activeIndex == 0 ? (
                <Button
                  size="small"
                  className={classes.button}
                  startIcon={<MdNavigateBefore />}
                  onClick={props.prev}
                >
                  prev.
                </Button>
              ) : (
                <Button
                  size="small"
                  className={classes.button}
                  startIcon={<MdNavigateBefore />}
                  disabled
                >
                  prev.
                </Button>
              )}
              <Button
                size="small"
                className={classes.button}
                endIcon={<MdNavigateNext />}
                onClick={props.next}
              >
                next
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div css={title}>Review Answers</div>
          <hr css={divider} />
          <ReviewAnswers
            answers={props.answers}
            handleOnClick={props.handleOnClick}
            handleSubmit={props.handleSubmit}
            back={props.back}
            handleOnChange={props.handleOnChange}
          />
        </>
      )}
    </>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

// Quiz Title [div]
const title = css`
  width: 100%;
  background-color: white;
`;

const titleText = css`
  max-width: 1200px;
  margin: auto;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  font-family: "Raleway", sans-serif;
  font-size: 45px;
  color: rgb(78, 78, 78);
`;

// Horizontal Divider [hr]
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const questionContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  height: 480px;
  padding: 16px;
`;

const qstNum = css`
  align-self: flex-start;
`;

const qstNumText = css`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: rgb(78, 78, 78);
`;

const btnGroup = css`
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
