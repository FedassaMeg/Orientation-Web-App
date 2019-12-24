/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function EditQuestionList(props) {
  return (
    <div css={container}>
      <button onClick={props.handleOnClick} css={btn}>
        Back to List
      </button>
      {props.qstArr[props.index]}
      <button onClick={props.next} css={btn}>
        next
      </button>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const btn = css`
  align-self: flex-end;
  width: 80px;
`;
