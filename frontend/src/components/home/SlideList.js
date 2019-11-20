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

export default function SlideList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let csm1 = intersectionWith(cloneDeep(props.md1), props.comArray, (i, j) => {
    return i.id === j.slide && assign(i, { completed: j.completed });
  });
  let csm3 = intersectionWith(cloneDeep(props.md3), props.comArray, (i, j) => {
    return i.id === j.slide && assign(i, { completed: j.completed });
  });
  let csm4 = intersectionWith(cloneDeep(props.md4), props.comArray, (i, j) => {
    return i.id === j.slide && assign(i, { completed: j.completed });
  });
  let csm5 = intersectionWith(cloneDeep(props.md5), props.comArray, (i, j) => {
    return i.id === j.slide && assign(i, { completed: j.completed });
  });

  let percentage1 = Math.round((csm1.length / props.md1.length) * 100);
  let percentage3 = Math.round((csm3.length / props.md3.length) * 100);
  let percentage4 = Math.round((csm4.length / props.md4.length) * 100);
  let percentage5 = Math.round((csm5.length / props.md5.length) * 100);

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
                value={percentage1}
                strokeWidth={16}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${percentage1 / 100})`,
                  strokeLinecap: "butt"
                })}
              />
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>MODULE 1</Typography>
              <Typography
                className={classes.heading}
              >{`${percentage1}%`}</Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={<ListSubheader component="div"></ListSubheader>}
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
          <div css={tempCard}>
            <div css={progressCir}>
              <CircularProgressbar
                value={percentage3}
                strokeWidth={16}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${percentage3 / 100})`,
                  strokeLinecap: "butt"
                })}
              />
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>MODULE 3</Typography>
              <Typography
                className={classes.heading}
              >{`${percentage3}%`}</Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={<ListSubheader component="div"></ListSubheader>}
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
          <div css={tempCard}>
            <div css={progressCir}>
              <CircularProgressbar
                value={percentage4}
                strokeWidth={16}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${percentage4 / 100})`,
                  strokeLinecap: "butt"
                })}
              />
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>MODULE 4</Typography>
              <Typography
                className={classes.heading}
              >{`${percentage4}%`}</Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={<ListSubheader component="div"></ListSubheader>}
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
          <div css={tempCard}>
            <div css={progressCir}>
              <CircularProgressbar
                value={percentage5}
                strokeWidth={16}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${percentage5 / 100})`,
                  strokeLinecap: "butt"
                })}
              />
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>MODULE 5</Typography>
              <Typography
                className={classes.heading}
              >{`${percentage5}%`}</Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={<ListSubheader component="div"></ListSubheader>}
            className={classes.root}
          >
            <HomeListItem arr={props.md5} comArray={props.comArray} />
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
