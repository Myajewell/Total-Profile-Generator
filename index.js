const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const path = require('path');
path.output('sample');
path.dirname('');
const teamMembers = [];

const managerPromt = () => {
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
        id: 'employee ID',
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
    email: 'email address',
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
    phone: 'office phone',
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
        const manager = new Manager(answers.name, answers.id, answers.email, ansers.phone);
        teamMembers.push(manager);
        promptMenue();
    })

};

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
    }]) 
    .then(unrtChoice => )
}
