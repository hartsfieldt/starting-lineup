// Node Modules
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist");

// Require Objects
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHtml = require("./utils/createhtml");

// Generate HTML Page
const savePath = path.join(OUTPUT_DIR, "index.html");

// Storing Team Array
const teamData = [];

const logo = `\x1b[33m
▒█▀▄▀█ █░░█ 　 ▀▀█▀▀ █▀▀ █▀▀█ █▀▄▀█ 　 ▒█▀▀█ █▀▀ █▀▀▄ █▀▀ █▀▀█ █▀▀█ ▀▀█▀▀ █▀▀█ █▀▀█
▒█▒█▒█ █▄▄█ 　 ░▒█░░ █▀▀ █▄▄█ █░▀░█ 　 ▒█░▄▄ █▀▀ █░░█ █▀▀ █▄▄▀ █▄▄█ ░░█░░ █░░█ █▄▄▀
▒█░░▒█ ▄▄▄█ 　 ░▒█░░ ▀▀▀ ▀░░▀ ▀░░░▀ 　 ▒█▄▄█ ▀▀▀ ▀░░▀ ▀▀▀ ▀░▀▀ ▀░░▀ ░░▀░░ ▀▀▀▀ ▀░▀▀

──────▄▀▄─────▄▀▄
─────▄█░░▀▀▀▀▀░░█▄
─▄▄──█░░░░░░░░░░░█──▄▄
█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█


\x1b[0m`

// Start the app and prompts
function app() {
  function createTeam() {
    console.clear();
    console.log(`

${logo}

=== CHOOSE EMPLOYEE TYPE ==================================

  `);
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
          case "No more employees":
            saveHtml();
        }
      });
  }

  function createManager() {
    console.clear();
    console.log(`

  ${logo}

=== CHOOSE EMPLOYEE TYPE ==================================
===== > NEW MANAGER =======================================

    `);
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your name?",
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

  function createEngineer() {
    console.clear();
    console.log(`

  ${logo}

  == CHOOSE EMPLOYEE TYPE ==================================
  ===== > NEW ENGINEER =======================================
  `);

    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter engineers name",
        },
        {
          type: "input",
          name: "id",
          message: "Enter engineers employee ID",
        },
        {
          type: "input",
          name: "email",
          message: "Enter engineers email",
        },
        {
          type: "input",
          name: "github",
          message: "Enter engineers github",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.name,
          answers.id,
          answers.email,
          answers.github
        );
        teamData.push(engineer);
        createTeam();
      });
  }

  function createIntern() {
    console.clear();
    console.log(`

  ${logo}

  == CHOOSE EMPLOYEE TYPE ==================================
  ===== > NEW INTERN =======================================
  `);

    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Enter interns name",
        },
        {
          type: "input",
          name: "id",
          message: "Enter interns employee ID",
        },
        {
          type: "input",
          name: "email",
          message: "Enter interns email",
        },
        {
          type: "input",
          name: "school",
          message: "Enter interns school",
        },
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.name,
          answers.id,
          answers.email,
          answers.school
        );
        teamData.push(intern);
        createTeam();
      });
  }

  createTeam();

  function saveHtml() {
    fs.writeFileSync(savePath, createHtml(teamData), "UTF-8");
    console.clear();
    console.log(`

    ╔═══╗─────╔═╗╔╗────╔═══╗────────╔╗───╔╗
    ║╔═╗║─────║╔╝║║────║╔═╗║────────║║──╔╝╚╗
    ║╚═╝╠═╦══╦╝╚╦╣║╔══╗║║─╚╬══╦╗╔╦══╣║╔═╩╗╔╬══╗
    ║╔══╣╔╣╔╗╠╗╔╬╣║║║═╣║║─╔╣╔╗║╚╝║╔╗║║║║═╣║║║═╣
    ║║──║║║╚╝║║║║║╚╣║═╣║╚═╝║╚╝║║║║╚╝║╚╣║═╣╚╣║═╣
    ╚╝──╚╝╚══╝╚╝╚╩═╩══╝╚═══╩══╩╩╩╣╔═╩═╩══╩═╩══╝
    ─────────────────────────────║║
    ─────────────────────────────╚╝

    === THE TEAM PROFILE PAGE HAS BEEN SUCCESSFULLY GENERATED ===
    === THANK YOU FOR USING OUR PROFILE GENERATOR ===
      `);
  }
}

app();
