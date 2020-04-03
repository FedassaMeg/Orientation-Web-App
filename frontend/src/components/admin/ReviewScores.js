/**@jsx jsx */
import { css, jsx } from "@emotion/core";

//Local components
import AdminTable from "./AdminTable";
import ReviewQuiz from "./ReviewQuiz";

const headerLabels = [
  {
    id: "name",
    label: "Employee Name",
    align: "left"
  },
  { id: "quiz", label: "Quiz", align: "left" },
  { id: "score", label: "Quiz Score", align: "right" },
  { id: "scorePrcnt", label: "Quiz Score (%)", align: "right" },
  {
    id: "submit",
    label: "Completed Date",
    align: "center"
  },
  { id: "review", label: "Admin Review", align: "left" }
];

export default function ReviewScores(props) {
  const {
    back,
    fetchState,
    handleCorrect,
    handleOnClick,
    handleSubmit,
    handleWrong,
    isClicked,
    isSubmitted,
    questions,
    quizId,
    scoreId,
    tableData,
    userAnswers
  } = props;

  return (
    <div css={container}>
      {!isClicked ? (
        <AdminTable
          headerLabels={headerLabels}
          handleOnClick={handleOnClick}
          tableData={tableData}
        />
      ) : (
        fetchState.isSettled && (
          <ReviewQuiz
            back={back}
            handleCorrect={handleCorrect}
            handleWrong={handleWrong}
            handleSubmit={handleSubmit}
            isSubmitted={isSubmitted}
            questions={questions}
            quizId={quizId}
            scoreId={scoreId}
            userAnswers={userAnswers}
          />
        )
      )}
    </div>
  );
}

const container = css`
  padding: 16px;
`;
