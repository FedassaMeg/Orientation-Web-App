/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import { useContent } from "../context/ContentContext";
import Modules from "../components/Modules";
import Container from "../components/Container";

export default function Slides({ handleOnClick }) {
  const { content, modules } = useContent();

  const modulesList = modules.map(module => {
    const moduleSlides = content.filter(item => {
      return item.module === module.id && item.content_type === 1;
    });

    if (moduleSlides.length !== 0) {
      return (
        <div key={module.id} css={moduleCard}>
          <Modules
            key={`modules-${module.id}`}
            title={`Module ${module.number}`}
            subtitle={module.title}
            list={moduleSlides}
            handleOnClick={handleOnClick}
            type="slide"
          />
        </div>
      );
    }
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
  font-family: "Fira Sans", sans-serif;
  font-size: 48px;
  font-weight: 200;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  background-color: whitesmoke;
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.15);
`;

const moduleCard = css`
  padding: 20px;
`;
