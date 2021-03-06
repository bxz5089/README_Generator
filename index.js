// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('./assets/node_modules/inquirer');
const generateMarkdown = require('./assets/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What licenses would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'None']
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your project installation process?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What is the usage of your project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How to test your project?',
        name: 'test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.mkdir(fileName, { recursive: true }, (err) => { if (err) throw err });
  fs.writeFile('./' + fileName + '/README.md', data, function (err) {
    if (err) throw err;
    console.log('successfully saved')
  })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      const fileName = answers.title;
      writeToFile(fileName, generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
