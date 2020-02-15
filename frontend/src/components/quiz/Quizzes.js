/** @jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import { useContent } from "../context/ContentContext";
import Container from "../components/Container";
import Modules from "../components/Modules";

export default function Quizzes() {
  const { quizzes } = useContent();

  const videoBased = quizzes.filter(quiz => {
    return quiz.content.content_type === 2;
  });
  const slideBased = quizzes.filter(quiz => {
    return quiz.content.content_type === 1;
  });
  const handoutBased = quizzes.filter(quiz => {
    return quiz.content.content_type === 3;
  });

  return (
    <Container>
      <div css={pageheader}>All Quizzes</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <div css={moduleCard}>
          <Modules
            key="videoquizzes"
            title="Quiz Set 1"
            subtitle="Quizzes on Videos"
            list={videoBased}
            type="quiz"
          />
        </div>
        <div css={moduleCard}>
          <Modules
            key="slidequizzes"
            title="Quiz Set 2"
            subtitle="Quizzes on Slides"
            list={slideBased}
            type="quiz"
          />
        </div>
        <div css={moduleCard}>
          <Modules
            key="handoutquizzes"
            title="Quiz Set 3"
            subtitle="Quizzes on Handouts"
            list={handoutBased}
            type="quiz"
          />
        </div>
      </div>
    </Container>
  );
}

const maincontainer = css`
  padding: 0;
  margin: auto;
  max-width: 120vmin;
  width: 100%;
`;

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
  background-color: whitesmoke;
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.15);
`;

const moduleCard = css`
  padding: 20px;
`;
