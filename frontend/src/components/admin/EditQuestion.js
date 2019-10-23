/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function EditQuestion(props) {
  console.log(props.value);
  return (
    <div css={edtQstn}>
      <form>
        <span css={span}>Set Question {props.id}:</span>
        <input
          type="text"
          key={props.question.key}
          value={props.value}
          css={input}
          onChange={props.handleChange}
        />
        <span css={span}>Set Answer:</span>
        <div>
          <input
            key={props.question.id}
            type="radio"
            onChange={props.handleChange}
            name="true"
          />
          <span>True</span>
        </div>
        <div>
          <input
            key={props.question.id}
            type="radio"
            onChange={props.handleChange}
            name="false"
          />
          <span>False</span>
        </div>
      </form>
    </div>
  );
}

const edtQstn = css``;

const span = css`
  font: 14px "Roboto", san-serif;
  font-weight: 500;
`;

const input = css`
  width: 100%;
  margin-top: 8px;
  margin-bottom: 12px;
`;
