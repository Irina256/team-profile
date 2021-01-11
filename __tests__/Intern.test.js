const { TestScheduler } = require("jest");
const Employee = require(`../lib/Employee`);
const Intern = require(`../lib/Intern`);

test(`get new Intern object`, () => {
  const intern = new Intern("Ernie", 3, "ernie@gmail.com", "Harvard");
  expect(intern.name).toBe("Ernie");
  expect(intern.id).toBe(3);
  expect(intern.email).toBe("ernie@gmail.com");
  expect(intern.school).toBe("Harvard");
});

test(`get intern's school`, () => {
  const intern = new Intern("Ernie", 3, "ernie@gmail.com", "Harvard");
  expect(intern.getGetSchool()).toBe("Harvard");
});

test(`get intern's role`, () => {
  const intern = new Intern("Ernie", 3, "ernie@gmail.com", "Harvard");
  expect(intern.getRole()).toBe("Intern");
});
