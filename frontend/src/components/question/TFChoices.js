/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// Material UI Components
import Radio from "@material-ui/core/Radio";

export default function TFChoices({ answer, handleOnChange }) {
  return (
    <div css={container}>
      <div css={choice}>
        <Radio
          color="default"
          checked={answer === true}
          onChange={handleOnChange}
          value={true}
        />
        <span>True</span>
      </div>
      <div css={choice}>
        <Radio
          color="default"
          checked={answer === false}
          onChange={handleOnChange}
          value={false}
        />
        <span>False</span>
      </div>
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
`;
