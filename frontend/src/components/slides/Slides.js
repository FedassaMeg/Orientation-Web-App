/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import Modules from "../components/Modules";
import Container from "../components/Container";

export default function Slides(props) {
  const modulesList = props.mdn.map((module, index) => {
    const moduleSlides = props.slidesArr.filter(slide => {
      return slide.module === module.id;
    });
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
      <div css={content}>
        <div css={cardscontainer}>{modulesList}</div>
      </div>
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

const moduleCard = css`
  padding: 20px;
`;
