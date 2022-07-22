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
            message: 'How do you install your app?'
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
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A']
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
        {type: 'input',
        name: 'email',
        message: 'What is your email address?'
        },
    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return new Promise((resolve, reject)=> {
//         fs.writeFile('./utils/README.md', fileName, data, err => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve({
//                 ok: true,
//                 message: 'File created!'
//             });
//         });
//     });
// };
// writeToFile();


// TODO: Create a function to initialize app
promptQuestions()
    .then( readmeData => {
        fs.writeFile('./utils/README.md', generateMarkdown(readmeData), err => {
            if (err) throw new Error (err)
            else
            console.log ('README.md file created successfully.');
        });
    });


// Function call to initialize app
// init();
