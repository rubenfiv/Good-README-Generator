const inquirer = require("inquirer")
const axios = require("axios")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter the project title:",
        name: "title",
    },
    {
        type: "input",
        message: "Descripton of your project:",
        name: "description",
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for project use:",
        name: "usage",
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well:",
        name: "credits",
    },
    {
        type: "list",
        message: "Enter relevant project license information. This lets other developers know what they can and cannot do with your project.",
        choices: ["MIT","IBM","Mozilla"],
        name: "license",
    },
    {
        type: "input",
        message: "Select the relevant badge:",
        name: "badges",
    },
    {
        type: "input",
        message: "Describe project contribution guidelines:",
        name: "contributing",
    },
    {
        type: "input",
        message: "Write tests for your application. Then provide examples on how to run them:",
        name: "tests",
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "githubUser",
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(){
        console.log("success!")
    })
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(data => {
     axios.get("https://api.github.com/users/"+data.githubUser).then(results => {
        data.repoLink = results.data.html_url
        const content = generateMarkdown(data)
        writeToFile("./README.md", content)
     })
  })


}

// function call to initialize program
init();
