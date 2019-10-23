/**@jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { MdAdd } from "react-icons/md";

import QuestionForm from "./QuestionForm";
export default function CreateQuiz() {
  const clicked = true;
  const [formCount, setFormCount] = useState(0);

  const add = () => {
    const frmCount = formCount;
    setFormCount(frmCount + 1);
  };

  const remove = () => {
    setFormCount(formCount - 1);
    console.log(formCount);
  };
  let questionList = [];
  for (let i = 0; i < formCount; i++) {
    questionList.push(<QuestionForm remove={remove} key={i} />);
  }
  return (
    <div>
      {!clicked ? (
        <button css={btn}>
          <div css={btnContent}>
            <div css={add}>
              <MdAdd />
            </div>
            <div css={btnText}>Create Quiz</div>
          </div>
        </button>
      ) : (
        <div css={inputSection}>
          <div>
            <span css={span}>Enter Quiz Title:</span>
            <input type="text"></input>
          </div>
          <div css={listContainer}>{questionList}</div>
          <button onClick={add}>add question</button>
        </div>
      )}
    </div>
  );
}

const btn = css`
  border: 2px dashed #656565;
  background-color: #ffffff;
  padding: 4px 12px;
  &:focus {
    outline: none;
  }
`;

const btnContent = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const add = css`
  padding-bottom: 4px;
`;

const btnText = css`
  padding: 0;
  margin-left: 4px;
  margin-right: 4px;
  font: 16px "Roboto", san-serif;
  color: #303030;
  font-weight: 500;
`;

const inputSection = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  //   margin-top: 8px;
`;

const span = css`
  margin-right: 8px;
`;

const listContainer = css`
  display: flex;
  flex-direction: column;
`;
