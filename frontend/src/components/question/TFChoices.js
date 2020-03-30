/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// Material UI Components
import Radio from "@material-ui/core/Radio";

export default function TFChoices({ answer, handleOnChange }) {
  return (
    <div css={container}>
      <label css={choice}>
        <Radio
          key={1}
          color="default"
          checked={answer === true}
          onChange={handleOnChange}
          value={true}
        />
        <span>True</span>
      </label>
      <label css={choice}>
        <Radio
          color="default"
          //If answer is null false will not be checked
          checked={answer === false}
          onChange={handleOnChange}
          value={false}
        />
        <span>False</span>
      </label>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: row;
`;

const choice = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
`;
