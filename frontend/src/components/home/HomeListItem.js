/**@jsx jsx */

import { css, jsx } from "@emotion/core";
import { MdCheckCircle, MdCancel } from "react-icons/md";

export default function HomeListItem(props) {
  const arrCompleted = props.comArray;
  const lists = props.arr.map(item => {
    let isCompleted = false;
    return (
      <div css={listSection}>
        <div css={listRight}>
          {arrCompleted.map(score => {
            item.id === score.slide || item.id === score.related_quiz
              ? (isCompleted = true)
              : (isCompleted = isCompleted);
          })}
          {isCompleted ? (
            <div css={check}>
              <MdCheckCircle />
            </div>
          ) : (
            <div css={cancel}>
              <MdCancel />
            </div>
          )}

          <div css={list}>{item.title}</div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>{lists}</div>
    </div>
  );
}

const listSection = css`
  font-size: 16px;
  font-weight: 400;
  padding-top: 8px;
  padding-left: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const listRight = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const check = css`
  margin-right: 16px;
  padding-bottom: 4px;
  color: green;
`;
const cancel = css`
  margin-right: 16px;
  padding-bottom: 4px;
  color: red;
`;
const list = css`
  padding: 0;
`;