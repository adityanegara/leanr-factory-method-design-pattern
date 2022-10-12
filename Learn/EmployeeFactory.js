import Employee from "./Employee.js";
const MANAGER_TITLE = 'Manager';
const STAFF_TITLE = 'Staff';
const MANAGER_SALARY = 10000000;
const STAFF_SALARY = 5000000;

class EmployeeFactory{
    static createManager(name){
        return new Employee(name, MANAGER_TITLE, MANAGER_SALARY);
    }

    static createStaff(name){
        return new Employee(name, STAFF_TITLE, STAFF_SALARY);
    }
}

export default EmployeeFactory;