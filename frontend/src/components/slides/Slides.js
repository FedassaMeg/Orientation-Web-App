/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Modules from "../components/Modules";
import Container from "../components/Container";

export default function Slides(props) {
  console.log(props.slidesArray);
  const modulesList = props.mdn.map((module, index) => {
    const moduleSlides = props.slidesArr.filter(slide => {
      return slide.module === module.id;
    });
    console.log(module, moduleSlides);
    return (
      <div css={moduleCard}>
        <Modules
          key={index}
          slide
          title={module.title}
          subtitle={module.subtitle}
          list={moduleSlides}
          handleOnClick={props.handleOnClick}
        />
      </div>
    );
  });
  return (
    <Container>
      <div css={pageheader}>All Slides</div>
      <hr css={divider} />
      <div css={cardscontainer}>{modulesList}</div>
    </Container>
  );
}
const pageheader = css`
  font-family: "Raleway", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: #fdfdfd;
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const cardscontainer = css`
  background-color: whitesmoke;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.15);
`;

const moduleCard = css`
  padding: 20px;
`;
