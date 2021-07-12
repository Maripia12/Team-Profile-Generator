/* 
// 1. command-line application that accepts user input
      -prompted for
         - my team members and
         - their information
      - HTML file is generated that
         - displays a formatted team roster using that
            - click on an email address in the HTML
               - my default email program opens and
                populates the TO field of the email with the address
            - click on the GitHub username
               - GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated */







const inquirer = require('inquirer');

const fs =  require('fs');
const Manager = require('./lib/Manager')
const employeesArray = []

//let questions = employeeData

function mainMenuQuestions () {
inquirer
  .prompt([    
   {
       type: 'input',
       name: 'name',
       message: "Please enter employee name."
    },
   {
      type: 'input',
      name: 'id',
      message: 'Please enter an id.',
   },
   {
       type: 'input',
       name: 'email',
       message: "Please enter employee email."
    },
    {
       type: 'list',
       name: 'type',
       message: 'What employee would you like to create?',
       choices: ['Manager', 'Engineer', 'Intern']

    }
   ])
   .then(answers => {
      switch(answers.type) {
         case 'Manager':
            inquirer.prompt([
               {
                  type: 'input',
                  name: 'officeNumber',
                  message: 'Please enter employee office number'
               }
            ])
            .then(managerData => {
               const name = answers.name
               const id = answers.id
               const email = answers.email
               const officeNumber = managerData.officeNumber

               const manager = new Manager(name, id, email, officeNumber)
              employeesArray.push(manager)
              inquirer.prompt([
                 {
                    type: 'confirm',
                    name: 'runAgain' ,
                     message: 'Would you like to create another employee?'
                 }
              ])
              .then(answer => {
                 const runAgain = answer.runAgain
                 if(runAgain){
                    mainMenuQuestions()
                 } else {
                   console.log('Goodbye!')
                 }
              })

            })
            break

      }
   })
}

mainMenuQuestions()
/* 

,  

    {
       type: 'employeeInfo',
       name: 'Manager',
       message: "Please enter employee name.",
       message: "Please provide an ID number.",
       message: "Please enter office number?",
       message: "Please enter email address?",
       

    },  

     {
       type: 'employeeInfo',
       name: 'Engineer',
       message: "Please enter employee name.",
       message: "Please provide an ID number.",
       message: "Please enter Github username?",
       message: "Please enter email address?",
       

    }, 

    {
       type: 'employeeInfo',
       name: 'Intern',
       message: "Please enter employee name.",
       message: "Please provide an ID number.",
       message: "Please enter school?",
       message: "Please enter email address?",
       

    },  */