/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { MdClear } from "react-icons/md";
export default function QuestionForm(props) {
  return (
    <div css={container}>
      <div css={question}>
        <span css={span}>Question:</span>
        <input type="text" />
        <button onClick={props.remove} css={btn}>
          <MdClear />
        </button>
      </div>
      <div css={answer}>
        <span css={span}>Set Answer:</span>
        <div css={radioGroup}>
          <input type="radio" name="true" css={radio} />
          <span>True</span>

          <input type="radio" name="false" css={radio} />
          <span>False</span>
        </div>
      </div>
      <hr />
    </div>
  );
}

const container = css`
  margin-top: 18px;
  margin-left: 16px;
`;
const question = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const answer = css`
  margin-top: 8px;
`;
const span = css`
  color: #303030;
  font-weight: 500;
  margin-right: 8px;
`;

const radioGroup = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const radio = css`
  margin-right: 4px;
  margin-left: 12px;
`;

const btn = css`
  border: none;
  background: none;
  margin-left: 4px;
  margin-bottom: 4px;
  color: red;
  &:focus {
    outline: none;
  }
`;
