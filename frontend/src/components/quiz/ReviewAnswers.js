/*
  TODO:
    - Display each question with provided answers for each
    - Consumes state from container component for user answers
    - Provides buttons to go back and edit different questions
    - provides button to submit completed quiz
    - Disables submit button if quiz is incomplete
    - Displays warning for questions that aren't answered
*/

/**@jsx jsx */

import { css, jsx } from "@emotion/core";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader";
import Paper from "@material-ui/core/Paper";

//React-Icon component
import { MdEdit } from "react-icons/md";

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
  const qstArr = props.questions.map((question, index) => {
    const userAnswer = props.answers.get(question.id) + "";
    return (
      <div key={index} css={container}>
        <div css={list}>
          <div css={number}>{index + 1}.</div>
          <div css={qst}>{question.question}</div>
        </div>
        <div css={answer}>
          {/* {!userAnswer == undefined
            ? "You answered:" + { userAnswer }
            : "Please provide answer"} */}
          You answered: {userAnswer}
        </div>
        <div css={editBtn}>
          <IconButton className={classes.button}>
            <MdEdit size={18} />
          </IconButton>
        </div>
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
        <div css={title}>HIPPA</div>
        <div css={main}>{qstArr}</div>
      </Paper>
      <div css={submitBtn}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={props.handleSubmit}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}
const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  transition-duration: 0.5s;
  &:hover {
    background-color: #f4f4f4;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.15);
  }
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
  margin-top: 8px;
`;

const editBtn = css``;

const submitBtn = css`
  align-self: flex-end;
  margin-right: 88px;
  margin-top: 32px;
`;
