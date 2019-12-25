/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// Material UI Components
import Radio from "@material-ui/core/Radio";

export default function MCChoices({ answer, handleOnChange, qstChoices }) {
  return (
    <div css={container}>
      <label css={choice}>
        <Radio
          color="default"
          checked={answer === "a"}
          onChange={handleOnChange}
          value="a"
        />
        <span>{qstChoices[0].choice}</span>
      </label>
      <label css={choice}>
        <Radio
          color="default"
          checked={answer === "b"}
          onChange={handleOnChange}
          value="b"
        />
        <span>{qstChoices[1].choice}</span>
      </label>
      <label css={choice}>
        <Radio
          color="default"
          checked={answer === "c"}
          onChange={handleOnChange}
          value="c"
        />
        <span>{qstChoices[2].choice}</span>
      </label>
      <label css={choice}>
        <Radio
          color="default"
          checked={answer === "d"}
          onChange={handleOnChange}
          value="d"
        />
        <span>{qstChoices[3].choice}</span>
      </label>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: column;
`;

const choice = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
