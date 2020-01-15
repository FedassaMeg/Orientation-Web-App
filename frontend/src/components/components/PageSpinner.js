import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#fff3b2"
  },
  barColorPrimary: {
    backgroundColor: "#ffd700"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    zIndex: 2
  }
}));

export default function PageSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ColorLinearProgress />
    </div>
  );
}
