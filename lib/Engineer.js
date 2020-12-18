
const Employee = require("./Employee");

// TODO: Write code to define and export the Employee class
class Engineer extends Employee{
    constructor(name,email,id,github){
     super(name, email, id )
        this.github = github
    }
   
    getGithub(){
        return this.github
    }
    getRole(){
        return "Engineer"
    }
};
module.exports = Engineer;