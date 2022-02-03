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
  var licenseLink = renderLicenseLink(data.license);
  if (licenseLink == 'None') {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  
 
  return `# ${data.title}

  ${licenseBadge}

  ---
  ## Description
  
  ${data.description}

  ---
  ## Installation
  
  ${data.install}

  



`;
}

module.exports = generateMarkdown;
