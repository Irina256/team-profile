const inquirer = require("inquirer");
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getname() {
    inquirer
      .prompt({
        type: "input",
        name: "name1",
        message: "What is your team manager’s name?",
      })
      .then(({ name }) => {
        this.name = new Employee(name);
      });
  }
  getID() {
    inquirer.prompt({
      type: "input",
      name: "id",
      message: "What is your employee ID?",
    });
  }
  getemail() {
    inquirer.prompt({
      type: "input",
      name: "email",
      message: "What is your email address?",
    });
  }
  getRole() {
    inquirer.prompt({
      type: "list",
      name: "position",
      message: "What is your position?",
      choices: ["Engeneer", "Intern", "Manager"],
    });
  }
}
module.exports = Employee;
