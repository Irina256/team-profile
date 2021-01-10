const { writeFile, copyFile } = require("./utils/generate-site.js");
const inquirer = require("inquirer");

const generatePage = require("./src/page-template.js");
const employees = [];
const promptManager = (manager) => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name1",
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
      name: "office",
      message: "What is your office number?",
    },
  ]);
  employees.push(manager).then(positionInfo);
};

const promptTeam = (team) => {
  console.log(`
=================
Add Engineer 
=================
`);

  return inquirer.prompt([
    {
      type: "input",
      name: "name2",
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
  ]);
  employees.push(team).then(positionInfo);
};
const positionInfo = (positionInfo) => {
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

    .then((memberInfo) => {
      positionInfo.employees.push(memberInfo);
      if (memberInfo.positions === "Engineer") {
        return promptTeam();
      } else if (memberInfo.positions === "Intern") {
        return promptIntern();
      } else return memberInfo;
    });
};
const promptIntern = (intern) => {
  console.log(`
=================
Add Intern
=================
`);

  return inquirer.prompt([
    {
      type: "input",
      name: "name3",
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
  ]);
  employees.push(intern).then(positionInfo);
};
promptManager()
  .then((teamdata) => {
    return generatePage(teamdata);
  })

  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
return copyFile();

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
