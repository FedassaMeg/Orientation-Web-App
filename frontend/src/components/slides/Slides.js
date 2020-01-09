/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import { useContent } from "../context/ContentContext";
import Modules from "../components/Modules";
import Container from "../components/Container";

const mdn = [
  {
    id: 1,
    title: "Module 1",
    subtitle: "Introduction to First Call"
  },
  { id: 3, title: "Module 3", subtitle: "Electronic Medical Record" },
  { id: 4, title: "Module 4", subtitle: "Introduction to Hospice" },
  { id: 5, title: "Module 5", subtitle: "Documentation" },
  { id: 6, title: "Module 6", subtitle: "Documenting Decline" },
  { id: 7, title: "Module 7", subtitle: "Symptom Management" },
  { id: 8, title: "Module 8", subtitle: "Plan of Care" },
  { id: 9, title: "Module 9", subtitle: "On Call is a Partnership" }
];

export default function Slides({ handleOnClick }) {
  const { slides } = useContent();

  const modulesList = mdn.map(module => {
    const moduleSlides = slides.filter(slide => {
      return slide.module === module.id;
    });
    return (
      <div key={module.id} css={moduleCard}>
        <Modules
          key={`modules-${module.id}`}
          title={module.title}
          subtitle={module.subtitle}
          list={moduleSlides}
          handleOnClick={handleOnClick}
          type="slide"
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
