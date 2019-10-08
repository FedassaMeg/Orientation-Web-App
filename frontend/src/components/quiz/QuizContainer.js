import React, { Component } from "react";
import axios from "axios";
import { parseInt } from "lodash";

import Quiz from "./Quiz";

let scr = 0;
export default class QuizPost extends Component {
  constructor() {
    super();
    this.state = {
      answers: new Map(),
      questions: [],
      ansArray: []
    };
  }
  getQuestionsByQuizId = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/quizs/${this.props.quiz.key}/questions`
      );
      return data;
    } catch (err) {
      console.log(err.message);
    }
  };

  async componentDidMount() {
    const quizData = await this.getQuestionsByQuizId();
    this.setState({ questions: quizData });
    this.state.questions.map((question, index) => {
      this.setState({ ansArray: [...this.state.ansArray, question.answer] });
      this.setState({ answers: this.state.answers.set(index + 1, false) });
    });

    console.log(this.state);
    console.log(this.props.quiz.key);
  }
  handleChange = event => {
    const key = parseInt(event.target.id, 10);
    const checked = event.target.checked;
    const added = this.state.answers.set(key, checked);
    if (checked) {
      this.setState({
        added
      });
    }
    console.log(key);
    console.log(this.state.answers);
  };

  compareAnsToScr = (value, key) => {
    if (value === this.state.ansArray[key - 1]) {
      scr = scr + 1;
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    const quizId = this.props.quiz.key;
    this.state.answers.forEach(this.compareAnsToScr);
    console.log(this.state.answers);
    console.log(scr);
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };

    axios
      .post(
        "http://localhost:8000/api/scores/",
        {
          score: scr,
          related_quiz: quizId
        },
        config
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Quiz
        quiz={this.props.quiz}
        questions={this.state.questions}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
