const Intern = require("../lib/Intern");

//testing the constructor
test("sets school using the constructor", () => {
  const employee = new Intern("Dave", "001", "dave@gmail.com", "UNC");
  expect(employee.school).toBe("UNC");
});

//testing school method
test("fetch school from the getSchool method", () => {
  const employee = new Intern("Dave", "001", "dave@gmail.com", "UNC");
  expect(employee.getSchool()).toBe("UNC");
});

test("fetch employees role from the getRole method", () => {
  const employee = new Intern("Dave", "001", "dave@gmail.com", "Intern");
  expect(employee.getRole()).toBe("Intern");
});
