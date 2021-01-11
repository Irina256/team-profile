const Employee = require(`../lib/Employee`);

test(`creates an employee object`, () => {
  const employee = new Employee("Ira", 2, "ira@gmail.com");
  expect(employee.name).toBe(`Ira`);
  expect(employee.id).toBe(2);
  expect(employee.email).toBe("ira@gmail.com");
});

test(`get employee's name`, () => {
  const employee = new Employee("Ira", 2, "ira@gmail.com");
  expect(employee.getname()).toEqual(expect.any(String));
});

test(`get employee's e-mail`, () => {
  const employee = new Employee("Ira", 2, "ira@gmail.com");
  expect(employee.getemail()).toEqual(expect.any(String));
});

test(`get employee's ID`, () => {
  const employee = new Employee("Ira", 2, "ira@gmail.com");
  expect(employee.getID()).toBe(`ID: 2`);
});

test(`get employee's position`, () => {
  const employee = new Employee("Ira", 2, "ira@gmail.com");
  expect(employee.getRole()).toBe("Employee");
});
