/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import Button from "../components/Button";
import Card from "../components/Card";
import ReviewQuiz from "./ReviewQuiz";
import Table from "./table/Table";
import TableHead from "./table/TableHead";
import TableBody from "./table/TableBody";
import TableRow from "./table/TableRow";
import TableCell from "./table/TableCell";

const headCells = [
  {
    id: "name",
    label: "Employee Name"
  },
  { id: "quiz", label: "Quiz" },
  { id: "score", label: "Quiz Score" },
  {
    id: "submit",
    label: "Completed Date"
  },
  { id: "review", label: "Admin Review" }
];

export default function ReviewScores(props) {
  const {
    isClicked,
    scoreArray,
    userArray,
    quizId,
    scoreId,
    handleOnClick,
    back,
    questions,
    userAns,
    handleCorrect,
    handleWrong,
    handleSubmit,
    isSubmitted,
    isCorrect,
    fetchState
  } = props;

  const cqArr = scoreArray.filter(quiz => {
    return quiz.is_completed;
  });

  return (
    <div css={container}>
      {!isClicked ? (
        <Card header="EMPLOYEE QUIZ SCORES">
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map(headCell => (
                  <TableCell key={headCell.id} header>
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cqArr.map((rowdata, index) => {
                let date = new Date(rowdata.signed_date);
                return (
                  <TableRow key={index}>
                    {userArray.map((user, index) => {
                      const userFullName =
                        user.last_name + ", " + user.first_name;
                      return (
                        rowdata.signed_by == user.id && (
                          <TableCell key={index} align="left">
                            {userFullName}
                          </TableCell>
                        )
                      );
                    })}

                    <TableCell>{rowdata.related_quiz.title}</TableCell>
                    <TableCell>
                      {rowdata.score}/{rowdata.related_quiz.num_questions}
                    </TableCell>
                    <TableCell>{date.toDateString()}</TableCell>
                    <TableCell>
                      {rowdata.related_quiz.review_required ? (
                        <Button
                          id={rowdata.related_quiz.id}
                          name={rowdata.id}
                          onClick={handleOnClick}
                          css={reqBtn}
                        >
                          Review Quiz
                        </Button>
                      ) : (
                        <span css={notReqSpan}>Not Required</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      ) : (
        fetchState.isSettled && (
          <ReviewQuiz
            quizId={quizId}
            scoreId={scoreId}
            back={back}
            questions={questions}
            userAns={userAns}
            handleCorrect={handleCorrect}
            handleWrong={handleWrong}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            isCorrect={isCorrect}
          />
        )
      )}
    </div>
  );
}

const container = css`
  padding: 16px;
`;

const reqBtn = css`
  color: #b00020;
`;

const notReqSpan = css`
  font: 14px "Roboto Condensed", san-serif;
  font-style: italic;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;
