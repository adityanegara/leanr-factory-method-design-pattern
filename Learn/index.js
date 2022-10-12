import Employee from "./Employee.js";
import EmployeeFactory from "./EmployeeFactory.js";

// const managerOne = new Employee('Adit', 'Manager', 10000000);
// const managerTwo = new Employee('Ayesha', 'Manager', 10000000);
// const staffOne = new Employee('Ayesha', 'Staff', 5000000);
const managerOne = EmployeeFactory.createManager('Adit');
const managerTwo = EmployeeFactory.createManager('Aura');
const staffOne = EmployeeFactory.createStaff('Ayesha');
console.log(managerOne.getName());
console.log(managerTwo.getSalary());
console.log(staffOne.getName())