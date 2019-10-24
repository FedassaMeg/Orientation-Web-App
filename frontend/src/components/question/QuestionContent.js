//Presentation component to display the question text

/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Material UI Components
import Box from "@material-ui/core/Box";

export default function QuestionContent() {
  return (
    <div css={container}>
      <Box display="flex" fontSize={16} fontWeight={500} color="text.primary">
        <div css={number}>1.</div>
        <div css={question}>
          When including tools, they should be placed directly above or below
          the table.
        </div>
      </Box>
    </div>
  );
}

const container = css``;

const number = css`
  margin-right: 24px;
`;

const question = css`
  padding-bottom: 16px;
`;
