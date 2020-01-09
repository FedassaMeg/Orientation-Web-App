/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//React-Icons Components
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import { useTransition, animated } from "react-spring";

//Local Components
import { useQuiz } from "./QuizContext";
import Question from "../question/Question";
import ReviewAnswers from "./ReviewAnswers";
import Container from "../components/Container";

//Material UI JSS
const useStyles = makeStyles(theme => ({
  button: {
    "&:focus": { outline: 0 }
  }
}));

export default function Quiz(props) {
  const classes = useStyles();
  const { quiz, questions } = useQuiz();

  const transitions = useTransition(questions, question => question.id, {
    unique: true,
    from: { opacity: 0 },
    enter: [
      { opacity: 1 },
      { transform: "translate3d(0, -50px, 0)" },
      { color: "#26a69a" }
    ],
    leave: [{ opacity: 1 }, { transform: "translate3d(0, -60px, 0)" }]
  });

  return (
    <>
      {!props.isCompleted ? (
        <Container>
          <div css={title}>{quiz.title}</div>
          <hr css={divider} />
          <div css={flexcontainer}>
            <div css={questionContainer}>
              <div css={qstNum}>
                <span css={qstNumText}>
                  {props.activeIndex + 1} OF {questions.length}
                </span>
              </div>
              <Question
                activeIndex={props.activeIndex}
                answer={props.answer}
                handleOnChange={props.handleOnChange}
                animate={props.animate}
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
        </Container>
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

// Quiz Title [div]
const title = css`
  font-family: "Raleway", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  padding-top: 10px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: white;
`;

// Horizontal Divider [hr]
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const flexcontainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const questionContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  height: 480px;
  padding: 16px;
  width: 1000px;
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
