// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// TODO: Write code to define and export the Employee class

class Manager extends Employee{
    constructor(name,email,id,officeNumber){
        super(name, email, id);
        this.officeNumber = officeNumber
           
     }
    // getName(){
    //     return this.name
    // }
    // getEmail(){
    //     return this.email;
    // }
    // getId(){
    //     return this.id
    // }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return "Manager"
    }
};
module.exports = Manager;