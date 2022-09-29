// Node Modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

// Generate HTML Page
const createHtml = require("./utils/createhtml");
const savePath = path.join(OUTPUT_DIR, "index.html");
const teamData = [];

function app() {
  function createTeam() {
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
    inquirer
      .prompt([
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
          name: "managerEmail",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is your office phone number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamData.push(manager);
        createTeam();
      });
  }
  createTeam();

  function saveHtml() {
    fs.writeFileSync(savePath, createHtml(teamData), "UTF-8");
  }
}

app();
