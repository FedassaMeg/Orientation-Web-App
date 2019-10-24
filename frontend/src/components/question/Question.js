/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Question(props) {
  return (
    <div css={main}>
      <div css={container}>
        <div css={number}>{props.number}.</div>
        <div css={question}> {props.question.question}</div>
      </div>
      <div css={checkbox}>
        <input id={props.number} type="radio" onChange={props.onChange} />
        <span>True</span>
        <input id={props.number} type="radio" onChange={props.onChange} />
        <span>False</span>
      </div>
    </div>
  );
}

const main = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  &: hover {
    background-color: #f0f0f0;
  }
`;

const container = css`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
const number = css`
  width: 28px;
  padding-right: 8px;
  text-align: right;
  font-size: 16px;
  font-weight: 600;
  color: rgb(78, 78, 78);
`;

const question = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 16px;
  color: rgb(78, 78, 78);
`;

const checkbox = css`
  margin: 0;
  align-self: center;
`;
