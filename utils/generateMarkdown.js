// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

  ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

  ${data.installation}

## Usage 

  ${data.usage}

## Credits

  ${data.credits}
  
## License

  ${data.license === "MIT" ?"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : data.license === "IBM" ?"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" : "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"}

## Badges

  [![GitHub stars](https://img.shields.io/github/stars/tterb/playmusic.svg?style=social&label=Star)](https://github.com/JonSnow/MyBadges)


## Contributing

${data.contributing}

## Tests

${data.tests}


## Questions

Github Repo: ${data.repoLink}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;
