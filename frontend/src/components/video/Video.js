/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import Container from "../components/Container";

export default function Video({ video }) {
  return (
    <Container>
      <div css={pageHeader}>{video.title}</div>
      <hr css={divider} />
      <div css={flexContainer}>
        <video
          controls
          autoPlay
          //poster={require("../../images/videoLoad.png")}
          css={videoTag}
        >
          <source
            src={require(`../../videos/videos/English/${video.url}.mkv`)}
          />
        </video>
      </div>
    </Container>
  );
}

// Video Title [div]
const pageHeader = css`
  font-family: "Fira Sans", sans-serif;
  font-size: 48px;
  font-weight: 200;
  padding-left: 90px;
  padding-top: 10px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: white;
`;

// Horizontal Divider [hr]
const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const flexContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const videoTag = css`
  margin-top: 36px;
`;
