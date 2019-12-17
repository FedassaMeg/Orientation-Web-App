import React, { useEffect } from "react";

// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  input: {
    width: "85%"
  }
}));

export default function SAChoices(props) {
  const classes = useStyles();

  return (
    <Input
      id="answer"
      className={classes.input}
      onChange={props.handleOnChange}
      value={props.answer === null ? "" : props.answer}
      multiline
    />
  );
}
