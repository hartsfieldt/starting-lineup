// Node Modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Generate HTML Page
const generatePage = require("./src/page-template.js");

// Start = prompt user to answer the questions to build their team profile (that image thing)
//inquirer to ask questions - create one for each position
// ask them which type of employee they are: manager, engineer, intern, break)
// class super class for employee and create extended classes for managers and engineers
// Gather managers name, employee id, email address, github user name, then return to menu to add an employee, intern, or complete your team
// Create an option to select from engineer or intern
// Engineer requirements: name, id, email, github
// Intern requirements: name, id, email and school
// Return to menu
// Function to render HTML Page

// Prompt / Start: Welcome manager and ask for information. All fields are required.

const promptQuestions = [
  {
    type: "input",
    name: "name",
    message:
      "Hello and welcome to your team's profile creator. What is your name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "employee-id",
    message: "What is your employee id?",
  },
  {
    type: "input",
    name: "office-num",
    message: "What is your office number?",
  },
];

const employee = [
  { manager },
  {
    Engineer,
  },
  {
    intern,
  },
];

// const mockData = {
//     name: "",
//     employeeid "",
//     position: "",
//     email: "",
//     github: "",
//     school: "", intern only
//     office: "", mgr only
// };

const promptUser = () => {
  return inquirer.prompt(promptQuestions);
};

function init() {
  promptUser(promptQuestions).then((answers) => {
    return generatePage(answers);
    console.log(answers);
  });
}

init();
