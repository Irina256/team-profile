const Manager = require(`../lib/Manager`);
// const Employee = require(`../lib/Employee`);

test(`creates new Manager object`, () => {
  const manager = new Manager("Chris", 52, "chris@gmail.com", 7646);
  expect(manager.name).toBe("Chris");
  expect(manager.id).toBe(52);
  expect(manager.email).toBe("chris@gmail.com");
  expect(manager.officenumber).toBe(7646);
});

test(`get's manager's Role`, () => {
  const manager = new Manager("Chris", 52, "chris@gmail.com", 7646);
  expect(manager.getRole()).toBe("Manager");
});
test(`get's manager's office number`, () => {
  const manager = new Manager("Chris", 52, "chris@gmail.com", "7646");
  expect(manager.getOfficeNumber()).toBe("7646");
});
