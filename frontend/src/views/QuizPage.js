// /**@jsx jsx */
// import { css, jsx } from "@emotion/core";
// import get from "lodash/get";

// import QuizContainer from "../components/quiz/QuizContainer";
// import Navigation from "../components/navbar/Navigation";

// const quizzesLookup = {
//   hippa: {
//     key: 1,
//     title: "HIPPA"
//   },
//   "sexual-harassment-in-health-care": {
//     key: 2,
//     title: "Sexual Harassment in Health Care"
//   },
//   "driving-safety": {
//     key: 3,
//     title: "Driving Safety"
//   },
//   "proper-body-mechanics": {
//     key: 4,
//     title: "Proper Body Mechanics"
//   },
//   "elder-abuse-and-neglect": {
//     key: 5,
//     title: "Elder Abuse and Neglect"
//   },
//   "infection-control-bag-technique": {
//     key: 6,
//     title: "Infection Control - Bag Technique"
//   },
//   "blood-borne-pathogens": {
//     key: 7,
//     title: "Blood Borne Pathogens"
//   },
//   "personal-safety-for-home-health-caregivers": {
//     key: 8,
//     title: "Personal Safety for Home Health Caregivers"
//   }
// };

// export default function QuizPage({ match }) {
//   const quiz = get(quizzesLookup, match.params.id);
//   return (
//     <div css={container}>
//       <Navigation />
//       <QuizContainer quiz={quiz} />
//     </div>
//   );
// }

// const container = css`
//   margin: 0;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
// `;
