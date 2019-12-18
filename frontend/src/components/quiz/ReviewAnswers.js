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
    width: "65%"
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

  const { data } = useQuiz();

  const qstArr = data.questions.map((question, index) => {
    const userAnswer = props.answers.get(index) + "";
    return (
      <div key={index} css={container}>
        <div css={contentContainer}>
          <div css={list}>
            <div css={number}>{index + 1}.</div>
            <div css={qst}>{question.question}</div>
          </div>
          <div css={answer}>You answered: {userAnswer}</div>
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
        <div css={title}>{data.quiz.title.toUpperCase()}</div>
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
