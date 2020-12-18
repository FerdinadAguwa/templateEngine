// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// TODO: Write code to define and export the Employee class
class Intern extends Employee{
    constructor(name,email,id, school){
     super(name, email, id )
        this.school = school 
    }
    // getName(){
    //     return this.mame
    // }
    // getEmail(){
    //     return this.email;
    // }
    // getId(){
    //     return this.id
    // }
    getSchool(){
        return this.school
    }
    getRole(){
        return "Intern"
    }
};
module.exports = Intern;