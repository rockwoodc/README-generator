//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//an array of questions for user input
const promptQuestions = () => {
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
            message: 'Provide a description of your project.'
        },
        {
            //installation of project
            type: 'input',
            name: 'installation',
            message: 'How do you install your app?',
            default: 'npm install'
        },
        {
            //usage of project
            type: 'input',
            name: 'usage',
            message: 'How do you use your app?'
        },
        {
            //license of project appear as list & badge appears
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT', 'Mozilla', 'Apache', 'BSD', 'None']
        },
        {
            //contributions of project
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines to contribute to this project?'
        },
        {
            //tests of project
            type: 'input',
            name: 'test',
            message: 'Any test instructions?'
        },
        {
            //questions of project-- link to github and email with instructions on how to contact person
            type: 'input',
            name: 'githubUserName',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ])
};

//function to write & initialize app
promptQuestions()
    .then( readmeData => {
        fs.writeFile('./utils/README.md', generateMarkdown(readmeData), err => {
            if (err) throw new Error (err)
            else
            console.log ('README.md file created successfully.');
        });
    });

