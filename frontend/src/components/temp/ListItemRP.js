import React from "react";

export default function ListItemRP(props) {
  const completedArr = props.comArray;
  const lists = props.arr.map(item => {
    let isCompleted = false;
    return (
      <div css={listSection}>
        <div css={listRight}>
          {completedArr.map(list => {
            item.id === list.item
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
  return <>{props.render({})}</>;
}
