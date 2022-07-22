const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = ``
  switch(license){
    case 'MIT':
      badge =`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Mozilla':
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
    case 'Apache':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'BSD':
      badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      break;
  };
  return badge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${(license)}](https://opensource.org/licenses/${(license)})`
  }else {
    return ''
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `Licensed by the ${renderLicenseLink(license)} license`;
  }else {
  return ''
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.liscense)}

  ## Description: 
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)<br />
  *[Usage](#usage)<br />
  *[License](#license)<br />
  *[Contribution](#contribution)<br />
  *[Tests](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Liscense
  ${renderLicenseSection(data.liscense)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  # Questions? Contact me:
  *GitHub: http://github.com/${data.githubUserName}
  *E-mail: ${data.email}`;
}

module.exports = generateMarkdown;
