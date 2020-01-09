/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Checkbox from "@material-ui/core/Checkbox";

//Local components
import Button from "../components/Button";
import Card from "../components/Card";
import ReviewQuiz from "./ReviewQuiz";
import Table from "./table/Table";
import TableHead from "./table/TableHead";
import TableBody from "./table/TableBody";
import TableRow from "./table/TableRow";
import TableCell from "./table/TableCell";
import TablePagination from "./table/TablePagination";

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
    fetchState,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage
  } = props;

  const cqArr = scoreArray.filter(quiz => {
    return quiz.is_completed;
  });

  return (
    <div css={container}>
      {!isClicked ? (
        <Card header="EMPLOYEE QUIZ SCORES">
          <Table header>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                {headCells.map(headCell => (
                  <TableCell key={headCell.id} variant="head" align="left">
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
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>

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
          <TablePagination
            page={page}
            count={cqArr.length}
            rowsPerPage={rowsPerPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
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
  border-radius: 2px;
  color: #b00020;
  //transition-duration: 0.4s;

  &: hover {
    background-color: #f00020;
    color: white;
  }
`;

const notReqSpan = css`
  font: 14px "Roboto Condensed", san-serif;
  font-style: italic;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;
