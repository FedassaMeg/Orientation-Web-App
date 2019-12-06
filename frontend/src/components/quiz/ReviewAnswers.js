/*
  TODO:
    - Display each question with provided answers for each ***Done for true false questions
    - Consumes state from container component for user answers
    - Provides buttons to go back and edit different questions ***DONE
    - provides button to submit completed quiz ***DONE
    - Disables submit button if quiz is incomplete 
    - Displays warning for questions that aren't answered
    - Add button for each question to quick change answer 
*/

/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useEffect, useState } from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";

//React-Icon component
import { MdEdit } from "react-icons/md";

import Choices from "../question/Choices";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 12,
    width: "85%"
  },
  root: {
    width: "100%",
    maxWidth: 850,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    "&:focus": { outline: 0 }
  }
}));

export default function ReviewAnswers(props) {
  const classes = useStyles();
  const [sections, setSections] = useState(new Map());
  const quizTot = props.quiz.num_questions;
  useEffect(() => {
    loadSections(quizTot);
  }, [props.quiz]);

  const loadSections = num => {
    let initial;
    for (let i = 0; i < num; i++) {
      initial = sections.set(i, false);
    }

    setSections(initial);
    console.log(sections);
  };

  const handleOnClick = event => {
    const sectionIndex = Number(event.target.id);
    const isOpen = !!sections.get(sectionIndex);
    const initial = sections.set(sectionIndex, !isOpen);
    setSections(initial);
    console.log(sections);
    console.log(sectionIndex);
  };

  const qstArr = props.questions.map((question, index) => {
    const userAnswer = props.answers.get(question.id) + "";
    console.log(sections.get(index));
    return (
      <div key={index} css={container}>
        <div css={contentContainer}>
          <div css={list}>
            <div css={number}>{index + 1}.</div>
            <div css={qst}>{question.question}</div>
          </div>
          <div css={answer}>You answered: {userAnswer}</div>
          <div css={editBtn}>
            <button id={index} onClick={handleOnClick}>
              Change Answer
            </button>
          </div>

          {/* <div css={editBtn}>
          <button
            id={index}
            className={classes.button}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <MdEdit size={18} />
          </button>
        </div>
        {open.index && (
          <div id={index} onClick={testLog} id={question.id}>
            test
          </div>
        )} */}
        </div>
        {sections.get(index) && (
          <div id={index} css={chgAnsContainer}>
            <Choices
              handleOnChange={props.handleOnChange}
              question={props.question}
              answers={props.answers}
              ansRes={props.ansRes}
            />
          </div>
        )}
      </div>
    );
  });

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      mt={8}
      mb={8}
    >
      <Paper className={classes.paper}>
        <div css={title}>{props.quiz.title.toUpperCase()}</div>
        <div css={main}>{qstArr}</div>
      </Paper>
      <div css={actionBar}>
        <div css={backBtn}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            //onClick={props.back}
          >
            Back to Quiz
          </Button>
        </div>
        <div css={submitBtn}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            //onClick={props.handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </Box>
  );
}
const container = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const contentContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  transition-duration: 0.5s;
  &:hover {
    background-color: #f4f4f4;
    // box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
  }
`;

const chgAnsContainer = css`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-left: 60px;
`;

const main = css`
  padding: 24px;
`;
const list = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 900px;
`;
const number = css`
  margin-right: 32px;
  font-size: 16px;
  font-weight: 500;
  color: #505050;
`;
const qst = css`
  width: 600px;
  font-size: 16px;
  font-weight: 500;
  color: #505050;
`;
const answer = css`
  margin-left: 16px;
  margin-right: 8px;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  color: #505050;
  padding: 8px;
`;
const title = css`
  margin-left: 32px;
  margin-top: 4px;
  color: #7a7a7a;
  font-weight: 400;
`;

const editBtn = css``;

const actionBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const submitBtn = css`
  margin-right: 88px;
  margin-top: 32px;
`;
const backBtn = css`
  margin-left: 88px;
  margin-top: 32px;
`;
