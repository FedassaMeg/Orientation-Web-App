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

export default function HandoutList() {
  const classes = useStyles();

  const { user } = useUser();

  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let applicable = "";

  if (user.role === 21 || user.role === 24) {
    applicable = "Please Review Handouts";
  } else {
    applicable = "Not Applicable";
  }

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
          <div css={tempCard}>
            <div css={progressText}>
              <Typography className={classes.heading}>ALL HANDOUTS</Typography>
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
    </div>
  );
}

const progressCir = css`
  width: 40px;
  height: 40px;
`;

const tempCard = css`
  display: flex;
  flex-direction: row;
  // background-color: #f4f4f4;
`;

const progressText = css`
  margin-left: 12px;
`;
