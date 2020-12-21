const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employee = []

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// /function to start the entire process

function start() {
    inquirer.prompt(managerResponse).then(function (answer) {
        console.log(answer)

        const manager = new Manager(answer.name, answer.email, answer.id, answer.officeNumber);
        employee.push(manager);
        whichJob(answer.job)

    })
}
// manager questions 
const managerResponse = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "Whats is your email?",
        name: 'email',
    },

    {
        type: 'input',
        message: "Whats is your id?",
        name: 'id',

    },
    {
        type: 'input',
        message: "Whats is your office number?",
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: "Who is on your team?",
        name: 'job',
        choices: ["Engineer", "Intern", "I dont want anymore team members "]
    },
]
// intern responses
const internResponse = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "Whats is your email?",
        name: 'email',
    },

    {
        type: 'input',
        message: "Whats is your id?",
        name: 'id',

    },
    {
        type: 'input',
        message: "Whats is the name of your school?",
        name: 'school',
    },
    {
        type: 'list',
        message: "Who is on your team?",
        name: 'job',
        choices: ["Engineer", "Intern", "I dont want anymore team members "]
    },
]
// engineer response
const engineerResponse = [
    {
        type: 'input',
        message: "What is your name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "Whats is your email?",
        name: 'email',
    },

    {
        type: 'input',
        message: "Whats is your id?",
        name: 'id',

    },
    {
        type: 'input',
        message: "Whats is your Github email?",
        name: 'github',
    },
    {
        type: 'list',
        message: "Who is on your team?",
        name: 'job',
        choices: ["Engineer", "Intern", "I dont want anymore team members "]
    },
]
// function for the engineer questions & responses
function engineerEngineer() {
    inquirer.prompt(engineerResponse).then(function (answer) {
        console.log(answer)
        const engineer = new Engineer(answer.name, answer.email, answer.id, answer.github)
        employee.push(engineer)
        whichJob(answer.job)


    })

}
// function for the intern questions & responses
function internIntern() {
    inquirer.prompt(internResponse).then(function (answer) {
        console.log(answer)
        const intern = new Intern(answer.name, answer.email, answer.id, answer.school)
        employee.push(intern)
        whichJob(answer.job)


    })
}




//  function to choose which job the user wants 
function whichJob(job) {
    if (job === "Engineer") {
        console.log("ask engineer questions")
        engineerEngineer()
    }
    else if (job === "Intern") {
        console.log("ask intern questions")
        internIntern()
        
    }
    else if (job === "I dont want anymore team members ") {
        fs.writeFile(outputPath, render(employee), (err) => {
            if (err) throw err;
            console.log('Your team has been created!');
        });
    }

}



console.log(employee)


start();















// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
