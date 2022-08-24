const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generatesite = require('./src/generate-site');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const pathOutput = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];
// inquirer.prompt will prompt the information for the Manager.
const managerPrompt = () => {
    return inquirer.prompt ( [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your first and last name.',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name.');
                }
                
            }

    },
    {
        type: 'input',
        name    : 'employee ID',
        message: 'Please enter your employee ID.',
        validate(value) {
            const pass = value.match(
              123456789
            );
            if (pass) {
              return true;
            } else
            console.log('please enter a valid employee ID.');
        }

},
{
    type: 'input',
    name: 'email address',
    message: 'Please enter your email address',
    validate: emailInput => {
        if(emailInput) {
            return true;
        } else {
            console.log('please enter a valid email address.');
        }

    }

},
{
    type: 'input',
    name: 'office phone',
    message: 'Please enter your office phone number',
    validate: officePhone => {
        if(officePhone) {
            return true;
        } else {
            console.log('please enter a valid phone number.');
        }

    }

},

    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.phone);
        teamMembers.push(manager);
        promptmenue();
    })

};
// use inquirer.prompt to prompt a menue to select either the intern or, engineer or finish biulding the team.
const promptmenue = () => {
return inquirer.prompt([
    {
    type: 'list',
    name: 'Menue',
    message: 'Please select an option to finish building your team',
    choices:[
        'Engineer',
        'Intern',
        'Finish building my team',
    ]
    }]) .then(userChoice => {
    // use switch funtion to prompt based on the user's choice. w3schools used to help with switch statement syntax.
    switch(userChoice.menue) {
        case "Add Engineer":
          promptEngineer();
          break;
        case "Add Intern":
          promptIntern();
          break;
        default: buildTeam();
      }
})};

// inquirer prompts if the Engineer is selected.
const promptEngineer = () => {
    console.log('Add Engineer');
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the first and last name of the Engineer.',
        validate: engineerName => {
            if(engineerName) {
                return true;
            } else {
                console.log('Please enter a valid name.');
            }
            
        }
    },
        {
            type: 'input',
            name: 'id',
            message: 'Please your employee ID.',
            validate: id => {
                if(id) {
                    return true;
                } else {
                    console.log('Please enter a valid ID.');
                }
                
            }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email.');
            }
            
        }

}, 
{
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.',
    validate: gitHubUser => {
        if(gitHubUser) {
            return true;
        } else {
            console.log('Please enter a valid username.');
        }
        
    }

    }
 ]).then(answers => {
    console.log(answers)
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHubUser)
    teamMembers.push(Engineer);
    promptMenue();
 })

};
// inquirer prompts if the Intern is selected.
const promptIntern = () => {
    console.log('Add Intern');
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the first and last name of the Intern.',
        validate: internName => {
            if(internName) {
                return true;
            } else {
                console.log('Please enter a valid name.');
            }
            
        }
    },
        {
            type: 'input',
            name: 'id',
            message: 'Please your employee ID.',
            validate: id => {
                if(id) {
                    return true;
                } else {
                    console.log('Please enter a valid ID.');
                }
                
            }

    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter a valid email.');
            }
            
        }

}, 
{
    type: 'input',
    name: 'school',
    message: 'Please enter the name of the school.',
    validate: internSchool => {
        if(internSchool) {
            return true;
        } else {
            console.log('Please enter a valid school.');
        }
        
    }

    }
    // takes the user back to the main menue.
 ]).then(answers => {
    console.log(answers)
    const Intern = new Intern (answers.name, answers.id, answers.email, answers.internSchool)
    teamMembers.push(Intern);
    promptMenue();
 })
};
managerPrompt();
