/**@jsx jsx */
import { css, jsx } from "@emotion/core";

// Material UI Components
import Radio from "@material-ui/core/Radio";

export default function MCChoices({ answer, handleOnChange, choices }) {
  const radioButtons = choices.map((choice, index) => {
    const letter =
      index === 0 ? "a" : index === 1 ? "b" : index === 2 ? "c" : "d";
    return (
      <label key={`radio-btn-${choice.id}`} css={label}>
        <Radio
          color="default"
          checked={answer === letter}
          onChange={handleOnChange}
          value={letter}
        />
        <span>{choice.choice}</span>
      </label>
    );
  });

  return <div css={container}>{radioButtons}</div>;
}

const container = css`
  display: flex;
  flex-direction: column;
`;

const label = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;
