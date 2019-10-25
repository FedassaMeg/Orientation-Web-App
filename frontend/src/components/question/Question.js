//Consume logic from container component to "Route" different types of questions to the appropriate presentation components

import React from "react";

// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// Local Components
import QuestionContent from "./QuestionContent";
import Choices from "./Choices";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    padding: 16
  }
}));

export default function Question(props) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Box pr={8} pl={8} width={750} height={80}>
            {props.question === undefined ? (
              <h3>Loading</h3>
            ) : (
              <QuestionContent
                activeIndex={props.activeIndex}
                question={props.question.question}
              />
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            width="100%"
            pl={13}
          >
            <Choices
              radioValue={props.radioValue}
              handleOnChange={props.handleOnChange}
            />
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}

// import { css, jsx } from "@emotion/core";

// export default function Question(props) {
//   return (
//     <div css={main}>
//       <div css={container}>
//         <div css={number}>{props.number}.</div>
//         <div css={question}> {props.question.question}</div>
//       </div>
//       <div css={checkbox}>
//         <input id={props.number} type="radio" onChange={props.onChange} />
//         <span>True</span>
//         <input id={props.number} type="radio" onChange={props.onChange} />
//         <span>False</span>
//       </div>
//     </div>
//   );
// }

// const main = css`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 8px;
//   &: hover {
//     background-color: #f0f0f0;
//   }
// `;

// const container = css`
//   display: flex;
//   flex-direction: row;
//   align-items: baseline;
// `;
// const number = css`
//   width: 28px;
//   padding-right: 8px;
//   text-align: right;
//   font-size: 16px;
//   font-weight: 600;
//   color: rgb(78, 78, 78);
// `;

// const question = css`
//   font-family: "Noto Sans JP", sans-serif;
//   font-size: 16px;
//   color: rgb(78, 78, 78);
// `;

// const checkbox = css`
//   margin: 0;
//   align-self: center;
// `;
