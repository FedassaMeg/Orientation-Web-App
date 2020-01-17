/**@jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { MdAdd } from "react-icons/md";

import QuestionForm from "../admin/QuestionForm";
export default function CreateQuiz() {
  const [formCount, setFormCount] = useState(0);
  const [clicked, setClicked] = useState(false);

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
  const handleOnClick = e => {
    setClicked(!clicked);
  };
  return (
    <div>
      {!clicked ? (
        <button css={btn} onClick={handleOnClick}>
          <div css={btnContent}>
            <div css={addIcon}>
              <MdAdd />
            </div>
            <div css={btnText}>Create Quiz</div>
          </div>
        </button>
      ) : (
        <div css={inputSection}>
          <button onClick={handleOnClick} css={backBtn} name="button">
            Back
          </button>
          {/* <form> */}
          <div css={createQuiz}>
            <span css={span}>Enter Quiz Title:</span>
            <input type="text"></input>
          </div>
          <div css={listContainer}>{questionList}</div>
          <button onClick={add} css={addQuestion}>
            add question
          </button>
          <button css={submitQuiz}>Create</button>
          {/* </form> */}
        </div>
      )}
    </div>
  );
}

const btn = css`
  border: 2px dashed;
  border-color: gray;
  background-color: #ffffff;
  padding: 4px 12px;
  &:focus {
    outline: none;
  }
`;

const backBtn = css`
margin-bottom: 12px;
border: none;
  border-radius: 2px
  background-color: #f4f4f4;
  padding: 4px 12px;
  font: 16px "Roboto", san-serif;
  color: #303030;
  font-weight: 500;
  &:focus {
    outline: none;
  }`;

const btnContent = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const addIcon = css`
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
  color: #303030;
  font-weight: 500;
  margin-right: 8px;
`;

const listContainer = css`
  display: flex;
  flex-direction: column;
`;

const addQuestion = css`
  margin-top: 12px;
  border: 2px dashed;
  border-color: gray;
  background-color: #ffffff;
  padding: 4px 12px;
  font: 14px "Roboto", san-serif;
  color: gray;
  font-weight: 500;
  font-style: italic;
  &:focus {
    outline: none;
  }
`;

const submitQuiz = css`
  margin-top: 16px;
  border: none;
  background-color: green;
  padding: 4px 12px;
  font: 16px "Roboto", san-serif;
  color: white;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const createQuiz = css`
  margin-bottom: 16px;
`;
