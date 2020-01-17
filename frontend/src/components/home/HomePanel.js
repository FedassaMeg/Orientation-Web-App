/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

import { MdExpandMore } from "react-icons/md";

//Local components
import ChangingProgressProvider from "../components/ChangingProgressProvider";
import HomeListItem from "./HomeListItem";

const useStyles = makeStyles(theme => ({
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

export default function HomePanel(props) {
  const {
    panelNumber,
    expanded,
    handleChange,
    percentage,
    interval,
    title,
    arr,
    comArray,
    handleOnClick,
    type
  } = props;
  const classes = useStyles();
  return (
    <ExpansionPanel
      expanded={expanded === `panel${panelNumber}`}
      onChange={handleChange(`panel${panelNumber}`)}
    >
      <ExpansionPanelSummary
        expandIcon={<MdExpandMore />}
        aria-controls={`panel${panelNumber}bh-content`}
        id={`panel${panelNumber}bh-header`}
      >
        <div css={tempCard}>
          <div css={progressCir}>
            <ChangingProgressProvider
              values={[0, percentage]}
              interval={interval}
            >
              {prcnt => (
                <CircularProgressbar
                  value={prcnt}
                  strokeWidth={16}
                  styles={buildStyles({
                    pathColor: `rgba(62, 152, 199, ${prcnt / 100})`,
                    trailColor: "#e4e4e4",
                    pathTransition:
                      prcnt === 0 ? "none" : "stroke-dashoffset 1s ease 0.1s"
                  })}
                />
              )}
            </ChangingProgressProvider>
          </div>
          <div css={progressText}>
            <Typography className={classes.heading}>{title}</Typography>
            <Typography className={classes.heading}>
              {percentage === "Not Applicable" ? percentage : `${percentage}%`}
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
          <HomeListItem
            arr={arr}
            comArray={comArray}
            type={type}
            handleOnClick={handleOnClick}
          />
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
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
