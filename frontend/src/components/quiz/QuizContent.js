/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grow from "@material-ui/core/Grow";

//React-Icons Components
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

//Local Components
import Question from "../question/Question";
import ReviewAnswers from "./ReviewAnswers";

//Material UI JSS
const useStyles = makeStyles(theme => ({
  button: {
    "&:focus": { outline: 0 }
  }
}));

export default function QuizContent(props) {
  const classes = useStyles();
  return (
    <>
      {!props.isCompleted ? (
        <div>
          <div css={title}>{props.quiz.title}</div>
          <hr css={divider} />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            m={8}
          >
            <Box alignSelf="flex-start" ml={12} mb={4}>
              <Typography color="textSecondary" variant="button">
                {props.activeIndex + 1} of {props.totCount}
              </Typography>
            </Box>
            <Question
              activeIndex={props.activeIndex}
              question={props.question}
              answers={props.answers}
              handleOnChange={props.handleOnChange}
              ansRes={props.ansRes}
            />
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width="85%"
              mt={4}
            >
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
            </Box>
          </Box>
        </div>
      ) : (
        <>
          <div css={title}>Review Answers</div>
          <hr css={divider} />
          <ReviewAnswers
            quiz={props.quiz}
            questions={props.questions}
            answers={props.answers}
            handleOnClick={props.handleOnClick}
            handleSubmit={props.handleSubmit}
            back={props.back}
            question={props.question}
            handleOnChange={props.handleOnChange}
            ansRes={props.ansRes}
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
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: white;
`;

// Horizontal Divider [hr]
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;
