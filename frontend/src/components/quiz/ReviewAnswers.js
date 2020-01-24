/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

//React-Icon component
import { MdEdit } from "react-icons/md";

//Local components
import { useQuiz } from "./QuizContext";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 12,
    minWidth: 920
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

  const { quiz, questions } = useQuiz();

  const qstArr = questions.map((question, index) => {
    const userAnswer = props.answers.get(question.id) + "";
    return (
      <div key={index} css={container}>
        <div css={list}>
          <div css={number}>{index + 1}.</div>
          <div css={qst}>{question.question}</div>
        </div>
        <div css={answer}>
          You answered: <span css={userAns}>{userAnswer}</span>
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
        <div css={title}>{quiz.title.toUpperCase()}</div>
        <div css={main}>{qstArr}</div>
      </Paper>
      <div css={actionBar}>
        <div css={backBtn}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={props.back}
          >
            Back to Quiz
          </Button>
        </div>
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
      </div>
    </Box>
  );
}

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  transition-duration: 0.4s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const main = css`
  padding: 24px;
`;

const list = css`
  max-width: 480px;
  width: 72%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
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
  max-width: 600px;
  margin-left: 32px;
  margin-right: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  color: rgba(0, 0, 0, 0.6);
`;

const userAns = css`
  font: 16px "Roboto", san-serif;
  font-weight: 600;
`;

const title = css`
  margin-left: 32px;
  margin-top: 4px;
  color: #7a7a7a;
  font-weight: 400;
`;

const actionBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
`;

const submitBtn = css`
  margin-right: 88px;
  margin-top: 32px;
`;

const backBtn = css`
  margin-left: 88px;
  margin-top: 32px;
`;
