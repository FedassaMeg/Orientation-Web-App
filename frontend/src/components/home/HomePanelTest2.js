/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { MdCheckCircle, MdCancel } from "react-icons/md";

export default function HomePanelTest2() {
  return (
    <div css={page}>
      <div css={card}>
        <div css={container}>
          <div css={table}>
            <div css={cellSelected}>Module 1 Introduction to First Call</div>
            <div css={cell}>Module 2 Annual Competencies</div>
            <div css={cell}>Module 3 Electronic Medical Record</div>
            <div css={cell}>Module 4 Introduction to Hospice</div>
            <div css={cell}>Module 5 Documentation</div>
            <div css={cell}>Module 6 Documenting Decline</div>
            <div css={cell}>Module 7 Symptom Management</div>
            <div css={cell}>Module 8 Plan of Care</div>
            <div css={cellBottom}>Module 9 Special Programs</div>
          </div>
          <div css={contentList}>
            <div css={listRight}>
              <div css={list}>
                <div>slide 1 (Slide)</div>
                <div css={check}>
                  <MdCheckCircle />
                </div>
              </div>
              <div css={list}>
                <div>slide 2 (Slide)</div>
                <div css={cancel}>
                  <MdCancel />
                </div>
              </div>
            </div>
            <div css={listRight}>
              <div css={list}>
                <div>quiz 1 (Quiz)</div>
                <div css={check}>
                  <MdCheckCircle />
                </div>
              </div>
              <div css={list}>
                <div>quiz 2 (Quiz)</div>
                <div css={check}>
                  <MdCheckCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const page = css`
  width: 100%;
  padding: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: whitesmoke;
`;

const container = css`
  display: flex;
  flex-direction: row;
`;

const table = css`
  display: flex;
  flex-direction: column;
`;

const cell = css`
  padding: 16px;
  font: 14px "Roboto", sans-serif;
  color: #777;
  background-color: #eee;
  border-right: 0.25px solid #ddd;
`;

const cellSelected = css`
  padding: 16px;
  font: 14px "Roboto", sans-serif;
  color: rgba(0, 0, 0, 0.87);
  border-bottom: 0.25px solid #ddd;
`;

const cellBottom = css`
  padding: 16px;
  font: 14px "Roboto", sans-serif;
  color: #777;
  background-color: #eee;
  border-right: 0.25px solid #ddd;
`;

const contentList = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 24px;
  width: 500px;
`;

const listRight = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const list = css`
  display: flex;
  flex-direction: row;
  padding: 16px;
  font: 16px "Roboto Condensed", sans-serif;
`;

const check = css`
  margin-left: 16px;
  color: green;
`;

const cancel = css`
  margin-left: 16px;
  color: red;
`;

const card = css`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
`;
