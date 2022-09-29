const Engineer = require("../lib/Engineer");

//testing the constructor
test("sets github using the constructor", () => {
  const employee = new Engineer("Dave", "001", "dave@gmail.com", "davet");
  expect(employee.github).toBe("davet");
});

//testing github method
test("fetch github from the getGithub method", () => {
  const employee = new Engineer("Dave", "001", "dave@gmail.com", "davet");
  expect(employee.getGithub()).toBe("davet");
});

test("fetch employees role from the getRole method", () => {
  const employee = new Engineer("Dave", "001", "dave@gmail.com", "Engineer");
  expect(employee.getRole()).toBe("Engineer");
});
