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
import SAChoices from "../question/SAChoices";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    padding: 16
  }
}));

const saquestion = "What does the pulse oximeter measure?";

export default function TempSAQuestion() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Box pr={8} pl={8} width={750} height={80}>
            <QuestionContent activeIndex={0} question={saquestion} />
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
            <SAChoices />
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}
