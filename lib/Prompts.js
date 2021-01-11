const Intern = require(`./Intern`);
const Manager = require(`./Manager`);
const Engineer = require(`./Engineer`);
const inquirer = require("inquirer");
const generatePage = require("../src/page-template");
const fs = require("fs");

class Prompts {
  constructor() {
    this.employees = [];
  }

  promptManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is your team manager’s name?",
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
          name: "id",
          message: "What is your employee ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email address?",
        },
        {
          type: "input",
          name: "officenumber",
          message: "What is your office number?",
        },
      ])
      .then(({ name, id, email, officenumber }) => {
        this.employees.push(new Manager(name, id, email, officenumber));

        this.addNewEmployee();
      });
  }

  addNewEmployee() {
    inquirer
      .prompt({
        type: "list",
        name: "positions",
        message:
          "Who would you like to add next?(Use arrow Down/Up keys to select)",
        choices: ["Engineer", "Intern", "Noone"],
      })
      .then((answers) => {
        if (answers.positions === "Engineer") {
          this.addEngineer();
        } else if (answers.positions === "Intern") {
          this.addIntern();
        } else {
          this.writeFile();
        }
      });
  }

  addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please provide member's first name",
        },
        {
          type: "input",
          name: "id",
          message: "What is his ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your team member's email address?",
        },
        {
          type: "input",
          name: "github",
          message: "What is team member's github?",
        },
      ])
      .then(({ name, id, email, github }) => {
        this.employees.push(new Engineer(name, id, email, github));
        this.addNewEmployee();
      });
  }
  addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please provide member's first name",
        },
        {
          type: "input",
          name: "id",
          message: "What is his ID?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your team member's email address?",
        },
        {
          type: "input",
          name: "school",
          message: "What is team member's school?",
        },
      ])
      .then(({ name, id, email, school }) => {
        this.employees.push(new Intern(name, id, email, school));
        this.addNewEmployee();
      });
  }
  writeFile() {
    fs.writeFile("./dist/index.html", generatePage(this.employees), (err) => {
      if (err) throw err;

      console.log("The file is created");
    });
  }
}

module.exports = Prompts;
