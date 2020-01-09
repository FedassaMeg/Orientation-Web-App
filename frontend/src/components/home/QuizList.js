/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";

import { intersectionWith, cloneDeep, assign } from "lodash";

//Material UI components
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

import { MdExpandMore } from "react-icons/md";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

//Local components
import ChangingProgressProvider from "../components/ChangingProgressProvider";
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

const combineObjArrs = (arr1, arr2) => {
  const combinedArr = intersectionWith(cloneDeep(arr1), arr2, (i, j) => {
    if (j.related_quiz !== undefined) {
      return (
        i.id === j.related_quiz.id && assign(i, { completed: j.is_completed })
      );
    }
  });
  return combinedArr;
};

const calcPercentage = (num1, num2) => {
  let newPercentage;
  if (num2 === 0) {
    newPercentage = "Not Applicable";
  } else {
    newPercentage = Math.round((num1 / num2) * 100);
  }
  return newPercentage;
};

export default function QuizList(props) {
  const { qzs1Arr, qzs3Arr, qzs4Arr, compltArray } = props;

  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const cqm1 = combineObjArrs(qzs1Arr, compltArray);
  const cqm3 = combineObjArrs(qzs3Arr, compltArray);
  const cqm4 = combineObjArrs(qzs4Arr, compltArray);

  const prcnt1 = calcPercentage(cqm1.length, qzs1Arr.length);
  const prcnt3 = calcPercentage(cqm3.length, qzs3Arr.length);
  const prcnt4 = calcPercentage(cqm4.length, qzs4Arr.length);

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
              <ChangingProgressProvider values={[0, prcnt1]} interval={100}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    strokeWidth={16}
                    styles={buildStyles({
                      pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                      trailColor: "#e4e4e4",
                      pathTransition:
                        percentage === 0
                          ? "none"
                          : "stroke-dashoffset 1s ease 0s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>VIDEOS</Typography>
              <Typography className={classes.heading}>
                {prcnt1 === "Not Applicable" ? prcnt1 : `${prcnt1}%`}
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
            <HomeListItem arr={qzs1Arr} comArray={compltArray} type="quiz" />
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
              <ChangingProgressProvider values={[0, prcnt3]} interval={200}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    strokeWidth={16}
                    styles={buildStyles({
                      pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                      trailColor: "#e4e4e4",
                      pathTransition:
                        percentage === 0
                          ? "none"
                          : "stroke-dashoffset 1s ease 0s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>SLIDES</Typography>
              <Typography className={classes.heading}>
                {prcnt3 === "Not Applicable" ? prcnt3 : `${prcnt3}%`}
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
            <HomeListItem arr={qzs3Arr} comArray={compltArray} type="quiz" />
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
              <ChangingProgressProvider values={[0, prcnt4]} interval={300}>
                {percentage => (
                  <CircularProgressbar
                    value={percentage}
                    strokeWidth={16}
                    styles={buildStyles({
                      pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                      trailColor: "#e4e4e4",
                      pathTransition:
                        percentage === 0
                          ? "none"
                          : "stroke-dashoffset 1s ease 0s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
            <div css={progressText}>
              <Typography className={classes.heading}>HANDOUTS</Typography>
              <Typography className={classes.heading}>
                {prcnt4 === "Not Applicable" ? prcnt4 : `${prcnt4}%`}
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
            <HomeListItem arr={qzs4Arr} comArray={compltArray} type="quiz" />
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
