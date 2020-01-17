//Consume logic from container component to "Route" different types of questions to the appropriate presentation components

import React from "react";

// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// Local Components
import QuestionContent from "../question/QuestionContent";
import MCChoices from "../question/MCChoices";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    padding: 16
  }
}));

const mcquestion = "Proper posture is: ";

export default function TempMCQuestion() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Box pr={8} pl={8} width={750} height={80}>
            <QuestionContent activeIndex={1} question={mcquestion} />
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
            <MCChoices />
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}
