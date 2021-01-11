class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getname() {
    return `${this.name}`;
  }

  getID() {
    return `ID: ${this.id}`;
  }
  getemail() {
    return `Email: ${this.email}`;
  }
  getRole() {
    return `Employee`;
  }
}
module.exports = Employee;
