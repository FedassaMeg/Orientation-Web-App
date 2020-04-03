/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";

//Local components
import Button from "../components/Button";
import Card from "../components/Card";
import Table from "./table/Table";
import TableHead from "./table/TableHead";
import TableBody from "./table/TableBody";
import TableRow from "./table/TableRow";
import TableCell from "./table/TableCell";
import TablePagination from "./table/TablePagination";

export default function AdminTable(props) {
  const { headerLabels, tableData, handleOnClick } = props;

  //Table component state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerRage] = useState(10);

  //Handle page change for table component
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //Handle row change for table component
  const handleChangeRowsPerPage = event => {
    setRowsPerRage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Generate empty rows to maintain table size
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  const emptyRow = css`
    height: ${53 * emptyRows}px;
  `;

  return (
    <Card header="EMPLOYEE QUIZ SCORES">
      <div css={container}>
        <div css={table}>
          <Table header>
            <TableHead>
              <TableRow>
                {headerLabels.map(label => (
                  <TableCell key={label.id} variant="head" align={label.align}>
                    {label.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((rowdata, index) => {
                  const {
                    userData,
                    quizTitle,
                    quizScore,
                    quizScorePrcnt,
                    date,
                    isReviewRequired,
                    quizId,
                    scoreId
                  } = rowdata;
                  return (
                    <TableRow key={index}>
                      <TableCell key={index} align="left">
                        {userData}
                      </TableCell>
                      <TableCell>{quizTitle}</TableCell>
                      <TableCell align="right">{quizScore}</TableCell>
                      <TableCell align="right">{quizScorePrcnt}</TableCell>
                      <TableCell align="center">{date}</TableCell>
                      <TableCell>
                        {isReviewRequired ? (
                          <Button
                            id={quizId}
                            name={scoreId}
                            onClick={handleOnClick}
                            css={button}
                          >
                            Review Quiz
                          </Button>
                        ) : (
                          <span css={span}>Not Required</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow css={emptyRow}>
                  <TableCell css={empty} variant="empty" />
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
  );
}

const container = css`
  padding: 32px 0 32px 32px;
`;

const table = css`
  padding: 16px;
`;

const button = css`
  border-radius: 2px;
  color: #b00020;

  &: hover {
    background-color: #f00020;
    color: white;
  }
`;

const span = css`
  font: 14px "Roboto Condensed", san-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

const empty = css`
  column-span: all;
`;
