// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name,email,id){
        this.name =name;
        this.email = email;
        this.id =id;
        
    }
    getName(){
        return this.mame
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id
    }
    getStatus(){
        return "Employee"
    }
};
module.exports = Employee;