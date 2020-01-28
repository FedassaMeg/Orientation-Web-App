/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { Link } from "react-router-dom";

//Material UI components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import { FaPlay } from "react-icons/fa";

//Local components
import Container from "../components/Container";
import Video from "./Video";

const videoArr = [
  { title: "Blood Borne Pathogens", url: "blood-borne-pathogens" },
  { title: "Elder Abuse and Neglect", url: "elder-abuse-and-neglect" },
  {
    title: "Infection Control Bag Technique",
    url: "infection-control-bag-technique"
  },
  {
    title: "Proper Body Mechanics and Back Safety",
    url: "proper-body-mechanics-and-back-safety"
  },
  { title: "Driving Safety", url: "driving-safety" },
  { title: "Hipaa", url: "hipaa" },
  { title: "Personal Safety", url: "personal-safety" },
  { title: "Sexual Harassment", url: "sexual-harassment" }
];

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6),
    width: "100%",
    maxWidth: 400
  }
}));

export default function Videos() {
  const classes = useStyles();

  const videoList = videoArr.map((video, index) => (
    <div key={index} css={moduleCard}>
      <div css={shell}>
        <Link to={`video/${video.url}`} css={buttonCard}>
          <div css={cardContent}>
            <div css={moduleSubtitle}>{video.title}</div>
            <div css={playBtn}>
              <FaPlay size={36} color="#777" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  ));

  return (
    <Container>
      <div css={pageHeader}>All Videos</div>
      <hr css={divider} />
      <div css={content}>
        <div css={cardscontainer}>{videoList}</div>
      </div>
    </Container>
  );
}

// emotion styling

// Main [div]
const pageHeader = css`
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

const content = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const cardscontainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  padding: 20px;
  background-color: whitesmoke;
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.15);
`;

const shell = css`
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
  transition-duration: 0.5s;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  }
`;

const moduleCard = css`
  padding: 20px;
`;

const buttonCard = css`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: none;
  &:focus {
    outline: none;
  }
`;

const cardContent = css`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const moduleSubtitle = css`
  font-size: 22px;
  font-family: "Open Sans", sans-serif;
  text-align: left;
  //color: rgba(0, 0, 0, 0.87);
  color: #333333;
`;

const playBtn = css`
  align-self: center;
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
