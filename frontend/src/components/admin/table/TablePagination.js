/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import IconButton from "@material-ui/core/IconButton";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import TableCell from "./TableCell";

const defaultRowsPerPageOptions = [10, 25, 50, 100];

export default function TablePagination(props) {
  const {
    count,
    onChangePage,
    onChangeRowsPerPage,
    page,
    rowsPerPageOptions = defaultRowsPerPageOptions,
    rowsPerPage
  } = props;

  const from = count === 0 ? 0 : page * rowsPerPage + 1;
  const to = Math.min(count, (page + 1) * rowsPerPage);
  const labelDisplayedRows = `${from}-${to === -1 ? count : to} of ${count}`;

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  return (
    <div css={container}>
      <div css={toolbar}>
        <div css={spacer} />
        <div css={caption}>Rows per page:</div>
        <select
          css={dropDown}
          value={rowsPerPage}
          onChange={onChangeRowsPerPage}
        >
          {rowsPerPageOptions.map(rowsPerPageOption => {
            return (
              <option
                key={`option-${rowsPerPageOption}`}
                value={rowsPerPageOption}
              >
                {rowsPerPageOption}
              </option>
            );
          })}
        </select>
        <div css={caption}>{labelDisplayedRows}</div>
        <div css={action}>
          <IconButton onClick={handleBackButtonClick} disabled={page === 0}>
            <MdKeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          >
            <MdKeyboardArrowRight />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

const container = css`
  font: 1rem "Roboto Condensed", sans-serif;
  color: rgba(0, 0, 0, 0.87);
  font-size: 14px;
  overflow: auto;
  &:last-child {
    padding: 0;
  }
`;

const toolbar = css`
  min-height: 52px;
  padding-right: 2px;
  position: relative;
  display: flex;
  align-items: center;
`;

const spacer = css`
  flex: 1 1 100%;
  background-color: dodgerblue;
`;

const caption = css`
  flex-shrink: 0;
`;

const dropDown = css`
  margin-left: 8px;
  margin-right: 24px;
  text-align: right;
  text-align-last: right;
`;

const action = css`
  flex-shrink: 0;
  margin-left: 20px;
`;
