class Employee {
    constructor(name,title, salary){
        this.name = name;
        this.title = title;
        this.salary = salary;
    }
    getName(){
        return this.name;
    }
    getSalary(){
        return this.salary;
    }
    getTitle(){
        return this.title;
    }
}
export default Employee;
