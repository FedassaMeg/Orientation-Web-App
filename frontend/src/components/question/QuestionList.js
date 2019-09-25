import React, { Fragment } from "react";
import axios from "axios";

import Question from "./Question";

const ROOT_URL = "http://localhost:8000/api";
const quizId = "1";

export default class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  getQuestionsByQuizId = async () => {
    try {
      const { data } = await axios.get(`${ROOT_URL}/quizs/${quizId}/questions`);
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  async componentDidMount() {
    const quizData = await this.getQuestionsByQuizId();
    this.setState({ questions: quizData });
  }
  render() {
    return (
      <Fragment>
        {this.state.questions.map((question, index) => (
          <Question key={index} question={question} number={index + 1} />
        ))}
      </Fragment>
    );
  }
}
