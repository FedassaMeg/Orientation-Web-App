/*
  TODO:
    - Display each question with provided answers for each
    - Consumes state from container component for user answers
    - Provides buttons to go back and edit different questions
    - provides button to submit completed quiz
    - Disables submit button if quiz is incomplete
    - Displays warning for questions that aren't answered
*/

import React from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListSubheader from "@material-ui/core/ListSubheader";
import Paper from "@material-ui/core/Paper";

//React-Icon component
import { MdEdit } from "react-icons/md";

const data = [
  {
    id: 1,
    question:
      "HIPAA Privacy and Security Rules dictate that all who may come into contact with protected health information go through training on HIPAA policy.",
    answer: true,
    quiz: 1
  },
  {
    id: 2,
    question:
      "One primary purpose of HIPAA is to protect people from losing their health insurance If they change jobs or have pre-exhibiting health conditions.",
    answer: true,
    quiz: 1
  },
  {
    id: 3,
    question:
      "There are three separate regulations referred to as the Privacy Rule, Security Rule and Information Rule.",
    answer: false,
    quiz: 1
  },
  {
    id: 4,
    question:
      "HIPAA regulations cover a broad scope and impact virtually every department of every entity that has access to personal health information.",
    answer: true,
    quiz: 1
  },
  {
    id: 5,
    question:
      "In the event of a conflict between HIPAA and state law, state law preempts HIPAA unless HIPAA is stricter.",
    answer: false,
    quiz: 1
  },
  {
    id: 6,
    question:
      "As a general rule, a covered entity may not use or disclose protected health information for purposes \r\nother than treatment, payment and healthcare operations without the patient’s written authorization.",
    answer: true,
    quiz: 1
  },
  {
    id: 7,
    question:
      "Except in certain circumstances individuals have the right to review and obtain a copy of their protected health information.",
    answer: true,
    quiz: 1
  },
  {
    id: 8,
    question:
      "The Security Rule portion of HIPAA also requires that administrative, physical and technical safeguards are in place to prevent the improper use or disclosure of PHI.",
    answer: true,
    quiz: 1
  },
  {
    id: 9,
    question:
      "According to the Security Rule, it is never permissible to use the internet to transmit PHI.",
    answer: false,
    quiz: 1
  },
  {
    id: 40,
    question:
      "Physical safeguards include Facility Access Controls, guidelines on Workstation Use and Security, Media Controls and Security Locks.",
    answer: true,
    quiz: 1
  }
];

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 12,
    width: "85%"
  },
  root: {
    width: "100%",
    maxWidth: 850,
    backgroundColor: theme.palette.background.paper
  }
}));
export default function ReviewAnswers(props) {
  const classes = useStyles();
  const answers = new Map([
    [1, "false"],
    [2, "true"],
    [3, "false"],
    [4, "true"],
    [5, "true"],
    [6, "false"],
    [7, "true"],
    [8, "true"],
    [9, "true"],
    [10, "false"]
  ]);
  const questions = data.map((question, index) => (
    <ListItem key={index}>
      <div>{index + 1}.</div>
      <div>{question.question} you answered:</div>
      <div>{answers.get(index + 1)}</div>
      <div>
        <IconButton>
          <MdEdit size={18} />
        </IconButton>
      </div>
    </ListItem>
  ));

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      mt={8}
      mb={8}
    >
      <Paper className={classes.paper}>
        <List dense className={classes.root}>
          <ListSubheader>HIPPA</ListSubheader>
          {questions}
        </List>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Paper>
    </Box>
  );
}
