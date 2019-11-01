import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";

import Typography from "@material-ui/core/Typography";

import { MdExpandMore } from "react-icons/md";
import HomeListItem from "./HomeListItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  progress: {
    padding: 0,
    width: "55%",
    marginTop: theme.spacing(1)
  }
}));

export default function SlidesList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>MODULE 1</Typography>
          <div className={classes.progress}>
            <LinearProgress variant="determinate" value={100} />
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">100% Completed</ListSubheader>
            }
            className={classes.root}
          >
            <HomeListItem arr={props.md1} comArray={props.comArray} />
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>MODULE 3</Typography>
          <div className={classes.progress}>
            <LinearProgress variant="determinate" value={100} />
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">100% Completed</ListSubheader>
            }
            className={classes.root}
          >
            <HomeListItem arr={props.md3} comArray={props.comArray} />
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>MODULE 4</Typography>
          <div className={classes.progress}>
            <LinearProgress variant="determinate" value={30} />
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">100% Completed</ListSubheader>
            }
            className={classes.root}
          >
            <HomeListItem arr={props.md4} comArray={props.comArray} />
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>MODULE 5</Typography>
          <div className={classes.progress}>
            <LinearProgress variant="determinate" value={45} />
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">100% Completed</ListSubheader>
            }
            className={classes.root}
          >
            <HomeListItem arr={props.md5} comArray={props.comArray} />
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
