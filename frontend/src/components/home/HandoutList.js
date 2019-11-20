/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";

import { intersectionWith, cloneDeep, assign } from "lodash";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { MdExpandMore } from "react-icons/md";

import HomeListItem from "./HomeListItem";

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

export default function HandoutList() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  let percentage = 0;
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
            <div css={progressCir}>
              <CircularProgressbar
                value={percentage}
                strokeWidth={16}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                  trailColor: "#e4e4e4",
                  strokeLinecap: "butt"
                })}
              />
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>ALL HANDOUTS</Typography>
              <Typography
                className={classes.heading}
              >{`${percentage}%`}</Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={<ListSubheader component="div"></ListSubheader>}
            className={classes.root}
          ></List>
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
