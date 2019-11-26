/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Route } from "react-router-dom";

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
            questions={props.data}
            answers={props.answers}
            handleOnClick={props.handleOnClick}
            //handleSubmit={props.handleSubmit}
            back={props.back}
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
  background-color: rgb(252, 252, 252);
`;

// Horizontal Divider [hr]
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

// Final Submit Button [button]
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
