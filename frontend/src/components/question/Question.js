//Consume logic from container component to "Route" different types of questions to the appropriate presentation components

import React from "react";

// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";

//React-Icons Components
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

// Local Components
import QuestionContent from "./QuestionContent";
import Choices from "./Choices";
import { lightGreen } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(),
    "&:focus": { outline: 0 }
  },
  card: {
    paddingLeft: 16,
    paddingRight: 16,
    maxWidth: 900
  },
  root: {
    backgroundColor: lightGreen
  }
}));

export default function Question() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            pr={8}
            pl={8}
          >
            <QuestionContent />
            <Choices />
          </Box>
        </CardContent>
        <CardActions>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
          >
            <Button
              size="small"
              className={classes.button}
              startIcon={<MdNavigateBefore />}
            >
              prev.
            </Button>
            <Button
              size="small"
              className={classes.button}
              endIcon={<MdNavigateNext />}
            >
              next
            </Button>
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
