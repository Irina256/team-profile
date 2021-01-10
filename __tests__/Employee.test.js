const Employee = require(`../lib/Employee`);

test(`creates an employee object`, () => {
  const employee = new Employee("Ira", 2, "ira@gmail.com");
  expect(employee.name).toBe(`Ira`);
  expect(employee.id).toBe(2);
  expect(employee.email).toBe("ira@gmail.com");
});
