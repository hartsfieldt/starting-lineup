const Manager = require("../lib/Manager");

//testing the constructor
test("sets office number using the constructor", () => {
  const employee = new Manager("Dave", "001", "dave@gmail.com", "9194505146");
  expect(employee.officeNumber).toBe("9194505146");
});

//testing office number method
test("fetch office number from the getOfficeNumber method", () => {
  const employee = new Manager("Dave", "001", "dave@gmail.com", "9194505146");
  expect(employee.getOfficeNumber()).toBe("9194505146");
});

test("fetch employees role from the getRole method", () => {
  const employee = new Manager("Dave", "001", "dave@gmail.com", "9194505146");
  expect(employee.getRole()).toBe("Manager");
});

test("fetch employee id from getId method from the employee super constructor", () => {
  const employee = new Manager("Dave", "001", "dave@gmail.com", "9194505146");
  expect(employee.getId()).toBe("001");
});
