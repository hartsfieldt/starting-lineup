const Employee = require("../lib/Employee");

//testing the constructor
test("return employees name", () => {
  const employee = new Employee("Dave");
  expect(employee.name).toBe("Dave");
});

test("return employees id", () => {
  const employee = new Employee("Dave", "001");
  expect(employee.id).toBe("001");
});

test("return employees email", () => {
  const employee = new Employee("Dave", "001", "dave@gmail.com");
  expect(employee.email).toBe("dave@gmail.com");
});

test("return employees role", () => {
  const employee = new Employee("Dave", "001", "dave@gmail.com", "employee");
  expect(employee.role).toBe("employee");
});

//testing the methods
test("fetches the employees name via the getName method", () => {
  const employee = new Employee("Dave");
  expect(employee.getName()).toBe("Dave");
});

test("fetches the employees id via the getID method", () => {
  const employee = new Employee("Dave", "001");
  expect(employee.getId()).toBe("001");
});

test("fetches the employees email via the getEmail method", () => {
  const employee = new Employee("Dave", "001", "dave@gmail.com");
  expect(employee.getEmail()).toBe("dave@gmail.com");
});

test("fetches the employees role via the getRole method", () => {
  const employee = new Employee("Dave", "001", "dave@gmail.com", "employee");
  expect(employee.getRole()).toBe("employee");
});
