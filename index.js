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
            message: 'Please enter your name',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Error');
                }
            } 

    }

    ])
}