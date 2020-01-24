/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Fragment } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//React-Icons Components
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

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
  const {
    activeIndex,
    animate,
    answer,
    answers,
    back,
    handleOnChange,
    handleOnClick,
    handleSubmit,
    isCompleted,
    next,
    prev
  } = props;

  const classes = useStyles();

  const { quiz, questions } = useQuiz();

  return (
    <Fragment>
      {!isCompleted ? (
        <Container>
          <div css={title}>{quiz.title}</div>
          <hr css={divider} />
          <div css={flexcontainer}>
            <div css={questionContainer}>
              <div css={qstNum}>
                <span css={qstNumText}>
                  {activeIndex + 1} OF {questions.length}
                </span>
              </div>
              <Question
                activeIndex={activeIndex}
                answer={answer}
                handleOnChange={handleOnChange}
                animate={animate}
                question={questions[activeIndex]}
                type={questions[activeIndex].question_type}
                choices={questions[activeIndex].choices}
              />
              <div css={btnGroup}>
                {!activeIndex == 0 ? (
                  <Button
                    size="small"
                    className={classes.button}
                    startIcon={<MdNavigateBefore />}
                    onClick={prev}
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
                  onClick={next}
                >
                  next
                </Button>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Fragment>
          <div css={title}>Review Answers</div>
          <hr css={divider} />
          <ReviewAnswers
            answers={answers}
            handleOnClick={handleOnClick}
            handleSubmit={handleSubmit}
            back={back}
            handleOnChange={handleOnChange}
          />
        </Fragment>
      )}
    </Fragment>
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
