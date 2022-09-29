// Node Modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

// Generate HTML Page
const generatePage = require("");
const savePath = path.join(OUTPUT_DIR, "index.html");
const teamData = [];

function app() {
  function createTeam() {
    // inquirer
    //   .prompt([
    //     {
    //       type: "list",
    //       message: "What type of employee would you like to create?",
    //       name: "createEmployee",
    //       choices: ["Manager", "No more employees"],
    //     },
    //   ])
    //   .then(function (choice) {
    //     switch (choice.createEmployee) {
    //       case "Manager":
    //         createManager();
    //         break;
    //       // default:
    //       //   saveHtml();
    //     }
    //   });
    inquirer
      .prompt([
        {
          type: "list",
          message: "What type of employee would you like to create?",
          name: "createEmployee",
          choices: ["Manager", "Engineer", "Intern", "No more employees"],
        },
      ])
      .then(function (choice) {
        switch (choice.createEmployee) {
          case "Manager":
            createManager();
            break;
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            saveHtml();
        }
      });
  }
  function createManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Write your name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is your employee id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office phone number?",
      },
    ]);
  }
  createTeam();
}

app();
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
