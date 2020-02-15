/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

import { MdExpandMore } from "react-icons/md";

import VideoListItem from "./VideoListItem";

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
    title: "Blood Borne Pathogens",
    url: "blood-borne-pathogens"
  },
  {
    title: "Elder Abuse and Neglect",
    url: "elder-abuse-and-neglect"
  },
  {
    title: "Infection Control Bag Technique",
    url: "infection-control-bag-technique"
  },
  {
    title: "Proper Body Mechanics and Back Safety",
    url: "proper-body-mechanics-and-back-safety"
  },
  {
    title: "Driving Safety",
    url: "driving-safety"
  },
  {
    title: "Hippa",
    url: "hippa"
  },
  {
    title: "Personal Safety",
    url: "personal-safety"
  },
  {
    title: "Sexual Harassment",
    url: "sexual-harassment"
  }
];

export default function VideoList(props) {
  const { expanded, handleChange } = props;

  const classes = useStyles();

  return (
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
          <div css={placeholder} />
          <div css={progressText}>
            <Typography className={classes.heading}>
              MODULE 2 New Hire/Annual Competencies 1-8 (All Employees)
            </Typography>
            <Typography className={classes.heading}>
              Please Watch Videos
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
          <VideoListItem arr={handoutsLookup} />
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
