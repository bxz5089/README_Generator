// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  };
  if (license == 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  };
  if (license == 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return '--- \n \n ## License \n \n https://opensource.org/licenses/MIT'
  };
  if (license == 'Apache 2.0') {
    return '--- \n \n ## License \n \n https://opensource.org/licenses/Apache-2.0'
  };
  if (license == 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None'){
    return ''
  } else {
    return`## License 
    This application uses ${license} license `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseLink = renderLicenseLink(data.license);
  
 
  return `# ${data.title}

${licenseBadge}

---
## Description

${data.description}    

---
## Table of Contents

- [Installation](##Installation)

- [Usage](##Usage)

- [License](##License) 

- [Tests](##Tests)

- [Questions](##Questions)

---
## Installation

${data.install}

---
## Usage

${data.usage}

${licenseLink}

---
## Tests

${data.test}

---
## Questions

If you have any questions or concerns please contact me at ${data.email} or checkout my GitHub page at [${data.username}](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
