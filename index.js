// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('./node_modules/inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the project installation process?',
        name: 'install',
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
