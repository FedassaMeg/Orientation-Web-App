/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

import { MdExpandMore } from "react-icons/md";

//Local components
import { useUser } from "../context/UserContext";
import HandoutListItem from "./HandoutListItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%"
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

const handoutsLookup = [
  {
    title: "Catheter Insertion and Care HO",
    url: "catheter-insertion-and-care-ho"
  },
  {
    title: "Catheter Irrigation",
    url: "catheter-irrigation"
  },
  {
    title: "Oximetry",
    url: "oximetry"
  },
  {
    title: "Routine Venipuncture Procedure",
    url: "routine-venipuncture-procedure"
  }
];

export default function HandoutList(props) {
  const { expanded, handleChange } = props;

  const classes = useStyles();

  const { user } = useUser();

  let applicable = "";

  if (user.role === 21 || user.role === 24) {
    applicable = "Please Review Handouts";
  } else {
    applicable = "Not Applicable";
  }

  return (
    <ExpansionPanel
      expanded={expanded === "panel3"}
      onChange={handleChange("panel3")}
    >
      <ExpansionPanelSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <div css={tempCard}>
          <div css={placeholder} />
          <div css={progressText}>
            <Typography className={classes.heading}>
              MODULE 2 New Hire/Annual Competencies 1-3 (Nurses)
            </Typography>
            <Typography className={classes.heading}>
              {`${applicable}`}
            </Typography>
          </div>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List
          component="nav"
          subheader={<ListSubheader component="div"></ListSubheader>}
          className={classes.root}
        >
          {applicable === "Please Review Handouts" && (
            <HandoutListItem arr={handoutsLookup} />
          )}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

const placeholder = css`
  width: 40px;
`;

const tempCard = css`
  display: flex;
  flex-direction: row;
  // background-color: #f4f4f4;
`;

const progressText = css`
  margin-left: 12px;
`;
