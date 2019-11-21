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

export default function QuizList(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let cqm1 = intersectionWith(
    cloneDeep(props.qzs1Arr),
    props.compltArray,
    (i, j) => {
      return i.id === j.related_quiz && assign(i, { completed: j.completed });
    }
  );
  let cqm2 = intersectionWith(
    cloneDeep(props.qzs3Arr),
    props.compltArray,
    (i, j) => {
      return i.id === j.related_quiz && assign(i, { completed: j.completed });
    }
  );
  let cqm3 = intersectionWith(
    cloneDeep(props.qzs4Arr),
    props.compltArray,
    (i, j) => {
      return i.id === j.related_quiz && assign(i, { completed: j.completed });
    }
  );

  let percentage1 = Math.round((cqm1.length / props.qzs1Arr.length) * 100);
  let percentage2 = Math.round((cqm2.length / props.qzs3Arr.length) * 100);
  let percentage3 = Math.round((cqm3.length / props.qzs4Arr.length) * 100);

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
                  trailColor: "#e4e4e4",
                  strokeLinecap: "butt"
                })}
              />
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>VIDEOS</Typography>
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
            <HomeListItem
              arr={props.qzs1Arr}
              comArray={props.compltArray}
              type="quiz"
            />
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
                value={percentage2}
                strokeWidth={16}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${percentage2 / 100})`,
                  trailColor: "#e4e4e4",
                  strokeLinecap: "butt"
                })}
              />
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>SLIDES</Typography>
              <Typography
                className={classes.heading}
              >{`${percentage2}%`}</Typography>
            </div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List
            component="nav"
            subheader={<ListSubheader component="div"></ListSubheader>}
            className={classes.root}
          >
            <HomeListItem
              arr={props.qzs3Arr}
              comArray={props.compltArray}
              type="quiz"
            />
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
                value={percentage3}
                strokeWidth={16}
                styles={buildStyles({
                  pathColor: `rgba(62, 152, 199, ${percentage3 / 100})`,
                  trailColor: "#e4e4e4",
                  strokeLinecap: "butt"
                })}
              />
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>HANDOUTS</Typography>
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
            {/* <HomeListItem arr={props.qzs4Arr} comArray={props.compltArray}  type="quiz" /> */}
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
