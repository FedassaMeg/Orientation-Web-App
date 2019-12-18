/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";

import Card from "../components/Card";
import Video from "./Video";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6),
    width: "100%",
    maxWidth: 400
  }
}));

export default function Videos(props) {
  const classes = useStyles();

  const videoArr = [
    "blood-borne-pathogens",
    "elder-abuse-and-neglect",
    "infection-control-bag-technique",
    "proper-body-mechanics-and-back-safety",
    "driving-safety",
    "hippa",
    "personal-safety",
    "sexual-harassment"
  ];

  const videoList = videoArr.map((video, index) => (
    <Video key={index} name={video} />
  ));

  return (
    <div css={container}>
      <div css={title}>Videos</div>
      <hr css={divider} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <List
          component="nav"
          subheader={
            <ListSubheader component="div">PLEASE SELECT VIDEO</ListSubheader>
          }
          className={classes.root}
        >
          {videoList}
        </List>
      </Box>
    </div>
  );
}

// Emotion Css-in-Js Styling

// Main [div]
const container = css`
  background-color: #f4f4f4;
  align-self: center;
  //max-width: 120vmin;
  width: 100%;
  padding-bottom: 24px;
`;

const title = css`
  font-family: "Raleway", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: white;
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;
