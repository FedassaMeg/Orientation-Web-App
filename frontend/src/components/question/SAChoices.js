import React, { useEffect } from "react";

// Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  input: {
    width: "85%"
  }
}));

export default function SAChoices(props) {
  const classes = useStyles();
  let initialValue;

  useEffect(() => {
    let initialValue = null;
  }, [props.activeIndex]);

  return (
    <FormControl className={classes.input} component="fieldset">
      <Input id="answer" onChange={props.handleOnChange} multiline />
    </FormControl>
  );
}
