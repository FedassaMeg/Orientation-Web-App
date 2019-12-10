/**@jsx jsx */

import { css, jsx } from "@emotion/core";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

export default function HomeListItem(props) {
  const kebabCase = str =>
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
      .filter(Boolean)
      .map(x => x.toLowerCase())
      .join("-");
  const arrCompleted = props.comArray;
  const lists = props.arr.map((item, index) => {
    let isCompleted = false;
    return (
      <div key={index} css={listSection}>
        <div css={listRight}>
          {arrCompleted.map(score => {
            if (score.related_quiz !== undefined) {
              item.id === score.slide || item.id === score.related_quiz.id
                ? (isCompleted = true)
                : (isCompleted = isCompleted);
            }
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
          {props.slide ? (
            <a
              href={item.url}
              target="blank"
              css={list}
              id={item.id}
              url={item.url}
              onClick={props.handleOnClick}
            >
              {item.title}
            </a>
          ) : (
            <Link to={`${props.type}/${kebabCase(item.title)}`} css={list}>
              {item.title}
            </Link>
          )}
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
