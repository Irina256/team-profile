const { writeFile, copyFile } = require("./utils/generate-site.js");
const inquirer = require("inquirer");

const generatePage = require("./src/page-template.js");

const promptManager = () => {
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
};

const promptTeam = (teamData) => {
  console.log(`
=================
Add Engineer or Intern
=================
`);

  // If there's no 'projects' array property, create one
  if (!teamData.members) {
    teamData.members = [];
  }

  return inquirer
    .prompt([
      {
        type: "list",
        name: "positions",
        message:
          "Who would you like to add next?(Use arrow Down/Up keys to select)",
        choices: ["Engeneer", "Intern", "Noone"],
      },
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
      {
        type: "confirm",
        name: "confirmAddMember",
        message: "Would you like to add another member?",
        default: false,
      },
    ])
    .then((memberInfo) => {
      teamData.members.push(memberInfo);
      if (memberInfo.confirmAddMember) {
        return promptTeam(teamData);
      } else {
        return teamData;
      }
    });
};

promptManager()
  .then(promptTeam)
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
// .then((data)=>{
//   return generateHTML(data);

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
