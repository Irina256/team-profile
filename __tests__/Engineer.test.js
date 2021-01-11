const Employee = require("../lib/Employee");
const Engineer = require(`../lib/Engineer`);

test(`creates new engineer object`, () => {
  const employee = new Engineer("Dave", 42, "dave@gmail.com", "dave74");
  expect(employee.name).toBe(`Dave`);
  expect(employee.id).toBe(42);
  expect(employee.email).toBe("dave@gmail.com");
  expect(employee.github).toBe("dave74");
});

test(`gets engineer's github`, () => {
  const employee = new Engineer("Dave", 42, "dave@gmail.com", "dave74");
  expect(employee.getGithub()).toEqual(expect.any(String));
});

test(`gets engineer's github`, () => {
  const employee = new Engineer("Dave", 42, "dave@gmail.com", "dave74");
  expect(employee.getRole()).toBe("Engineer");
});
