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
    label: "Employee Name",
    align: "left"
  },
  { id: "quiz", label: "Quiz", align: "left" },
  { id: "score", label: "Quiz Score", align: "right" },
  { id: "scorePrcnt", label: "Quiz Score (%)", align: "right" },
  {
    id: "submit",
    label: "Completed Date",
    align: "center"
  },
  { id: "review", label: "Admin Review", align: "left" }
];

export default function ReviewScores(props) {
  const {
    back,
    emptyRows,
    fetchState,
    handleCorrect,
    handleWrong,
    handleSubmit,
    handleChangePage,
    handleChangeRowsPerPage,
    handleOnClick,
    isClicked,
    isSubmitted,
    isCorrect,
    page,
    quizId,
    questions,
    rowsPerPage,
    scoreId,
    tableData,
    userTFAnswers,
    userMCAnswers,
    userSAAnswers
  } = props;

  const emptyRow = css`
    height: ${53 * emptyRows}px;
  `;

  return (
    <div css={container}>
      {!isClicked ? (
        <Card header="EMPLOYEE QUIZ SCORES">
          <div css={main}>
            <div css={tableWrapper}>
              <Table header>
                <TableHead>
                  <TableRow>
                    {headCells.map(headCell => (
                      <TableCell
                        key={headCell.id}
                        variant="head"
                        align={headCell.align}
                      >
                        {headCell.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((rowdata, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell key={index} align="left">
                            {rowdata.userData}
                          </TableCell>
                          <TableCell>{rowdata.quizTitle}</TableCell>
                          <TableCell align="right">
                            {rowdata.quizScore}
                          </TableCell>
                          <TableCell align="right">
                            {rowdata.quizScorePrcnt}
                          </TableCell>
                          <TableCell align="center">{rowdata.date}</TableCell>
                          <TableCell>
                            {rowdata.isReviewRequired ? (
                              <Button
                                id={rowdata.quizId}
                                name={rowdata.scoreId}
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
                  {emptyRows > 0 && (
                    <TableRow css={emptyRow}>
                      <TableCell css={emptyCell} variant="empty" />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              page={page}
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </div>
        </Card>
      ) : (
        fetchState.isSettled && (
          <ReviewQuiz
            quizId={quizId}
            scoreId={scoreId}
            back={back}
            questions={questions}
            userAns={[...userMCAnswers, ...userSAAnswers, ...userTFAnswers]}
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

const main = css`
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
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
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

const tableWrapper = css`
  padding: 16px;
  overflow-x: auto;
`;

const emptyCell = css`
  column-span: all;
`;
