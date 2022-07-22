//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promtQuestions = () => {
    return inquirer.prompt([
        {
            //title of project
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            //check if user inputed info, if not prompt them to enter it
            validate: Input => {
                if (Input) {
                    return true;
                }else {
                    console.log('Please enter a response.')
                    return false;
                }
            }
        },
        {
            //description of project
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.',
            //check if user inputed info, if not prompt them to enter it
            validate: Input => {
                if (Input) {
                    return true;
                }else {
                    console.log('Please enter a response.')
                    return false;
                }
            }
        },
        {
            //installation of project
            type: 'input',
            name: 'installation',
            message: 'How do you install your app?',
            //check if user inputed info, if not prompt them to enter it
            validate: Input => {
                if (Input) {
                    return true;
                }else {
                    console.log('Please enter a response.')
                    return false;
                }
            }
        },
        {
            //usage of project
            type: 'input',
            name: 'usage',
            message: 'How do you use your app?',
            //check if user inputed info, if not prompt them to enter it
            validate: Input => {
                if (Input) {
                    return true;
                }else {
                    console.log('Please enter a response.')
                    return false;
                }
            }
        },
        {
            //license of project appear as list & badge appears
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A'],
            //check if user inputed info, if not prompt them to enter it
            validate: Input => {
                if (Input) {
                    return true;
                }else {
                    console.log('Please enter a response.')
                    return false;
                }
            }
        },
        {
            //contributions of project
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines to contribute to this project?',
            //check if user inputed info, if not prompt them to enter it
            validate: Input => {
                if (Input) {
                    return true;
                }else {
                    console.log('Please enter a response.')
                    return false;
                }
            }
        },
        {
            //tests of project
            type: 'input',
            name: 'test',
            message: 'Any test instructions?',
            //check if user inputed info, if not prompt them to enter it
            validate: Input => {
                if (Input) {
                    return true;
                }else {
                    console.log('Please enter a response.')
                    return false;
                }
            }
        },
        {
            //questions of project-- link to github and email with instructions on how to contact person
            type: 'input',
            name: 'questions',
            message: 'What is your GitHub username?',
            //check if user inputed info, if not prompt them to enter it
            validate: Input => {
                if (Input) {
                    return true;
                }else {
                    console.log('Please enter a response.')
                    return false;
                }
            }
        },
        {type: 'input',
        name: 'questions',
        message: 'What is your email address?',
        //check if user inputed info, if not prompt them to enter it
        validate: Input => {
            if (Input) {
                return true;
            }else {
                console.log('Please enter a response.')
                return false;
                }
            }
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
