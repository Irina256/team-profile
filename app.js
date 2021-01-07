const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/page-template.js");

const promptManager = () => {
  return inquirer.prompt([
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
      name: "ID",
      message: "What is your employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?",
    },
  ]);
};
const promptNewEmployee = (data) => {
  if (!data.positions) {
    data.positions = [];
  }
  return inquirer
    .prompt([
      {
        type: "list",
        name: "positions",
        message:
          "Who would you like to add next?(Use arrow Down/Up keys to select)",
        choices: ["Engineer", "Intern", "Noone"],
      },
    ])
    .then((answer) => {
      // data.positions.push(answer);
      if (answer.positions === "Engineer") {
        promptEngineer();
      } else if (answer.positions === "Intern") {
        console.log("1");
        promptIntern();
      } else {
      }
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your engineer's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your engineer's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your engineer's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your engineer's github?",
      },
    ])
    .then(promptNewEmployee);
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your intern's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is your intern's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your intern's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your intern's github?",
      },
    ])
    .then(promptNewEmployee);
};

promptManager().then(promptNewEmployee);
// .then((answer) => {
//   if (answer.positions[0]) {
//     promptEngineer();
//   } else if (answer.positions[1]) {
//     console.log("1");
//     promptIntern();
//   } else {
//     return;
//   }
// });

// const pageHTML = generatePage();

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);

//   console.log('Page created! Check out index.html in this directory to see it!');
// });

// const pageHTML = generatePage(name, github);
// fs.writeFile("index.html", generatePage(name, github), (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });
