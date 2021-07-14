const inquirer = require('inquirer');
const path = require("path");
const fs =  require('fs');
const util = require("util");

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



const employeesArray = []

const writeFileAsync = util.promisify(fs.writeFile);

const buildTeam = (answers) => 
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />

  
    <link rel="stylesheet" href="style.css" />

  </head>

  <body>
    <!-- title header -->

    <header class="title">

      <h1>My Team</h1>

    </header>

    <!-- Manager Card -->

    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${answers.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${answers.Manager}</h6>
         
        <h6 aria-placeholder="ID#">ID:${answers.id}</h6>
        <a href="#" class="manager-email">Email:${answers.email}</a>

        <p class= officeNumber aria-placeholder="office">Office number:</p>
      </div>
    </div>

    <!-- Engineer Card -->

    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${answers.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${answers.Engineer}</h6>
        
        <h6 aria-placeholder="ID#">ID:${answers.id}</h6>
        <a href="#" class="engineer-email">Email:${answers.email}</a>
        <br />
        <a href="#" class="card-link">GitHub: ${answers.githubName}</a>
      </div>
    </div>

    <!-- Intern Card -->

    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${answers.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${answers.Intern}</h6>
      
        <h6 aria-placeholder="ID#">ID:${answers.id}</h6>
        <a href="#" class="card-link">Email:${answers.email}</a>
        <p class= "school" aria-placeholder="school">School:${answers.schoolName}</p>
      </div>
    </div>
  </body>
</html>`;

const init = () => {
  mainMenuQuestions()
   //  .then((answers) => writeFileAsync("index.html", buildTeam(answers)))
   //  .then(() => console.log("Successfully created team"))
   //  .catch((err) => console.error(err));
};

init();





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
               console.log('MANAGER --> ', manager)
              employeesArray.push(manager)
              inquirer.prompt([
                 {
                    type: 'confirm',
                    name: 'runAgain',
                   message: 'Would you like to create another employee?'
                 }
              ])
              .then(answer => {
                 const runAgain = answer.runAgain
                 if(runAgain){
                    console.log('RUNNING MAIN AGAIN')
                     mainMenuQuestions()
                 } else {
                    buildTeam(answer)
                   fs.writeFileAsync("index.html", buildTeam(answers));
                 }
              })
            })
         break;

         case 'Engineer':
            inquirer.prompt([
               {
                  type: 'input',
                  name: 'githubName',
                  message: 'Please enter employees Github Username.'
               }
            ])         
            .then(engineerData => {
               const name = answers.name
               const id = answers.id
               const email = answers.email
               const githubName = engineerData.githubName

               const engineer = new Engineer(name, id, email, githubName)
               console.log('ENGINEER -> ', engineer)
              employeesArray.push(engineer)
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
                    buildTeam(answer)
                   fs.writeFileAsync("index.html", buildTeam(answers));
                 }
              })
            })
         break;

         case 'Intern':
            inquirer.prompt([
             {
                  type: 'input',
                  name: 'schoolName',
                  message: 'Please enter employees school name.'
               }
            ]) 
            .then(internData => {
               const name = answers.name
               const id = answers.id
               const email = answers.email
               const schoolName = internData.schoolName

               const intern = new Intern (name, id, email, schoolName)
               console.log('INTERN --> ', intern)
              employeesArray.push(intern);  

               inquirer.prompt([
                {
                   type:'confirm',
                   name:'runAgain',
                   message:'Would you like to create another employee?'

                }  
               ]).then(answer => {
                  if (answer.runAgain === true) {
                     mainMenuQuestions()
                  } else {
                    buildTeam(answer) 
                    fs.writeFileAsync("index.html", buildTeam(answers))
                    
                  }  
               })   
            })
           
         }
      })
               
   
   }
            

      




                        
// mainMenuQuestions();



      
         
   
    





