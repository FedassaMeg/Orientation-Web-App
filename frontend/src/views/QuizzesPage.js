import React from "react";
import Quizzes from "../components/quiz/Quizzes";
import Navigation from "../components/navbar/Navigation";

export default function QuizPage() {
  return (
    <div>
      <Navigation />
      <Quizzes />
    </div>
  );
}
