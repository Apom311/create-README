// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does this project Do?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this projects Purpose?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How would someone contribute to this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What Kind of License should this project have?',
        choices: ['idk', 'fill in later', 'look up what a license is'],
    },
    {
        type: 'input',
        name: 'profile',
        message: 'Enter GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter Email Address',
    },
];


// TODO: Create a function to write README file
const writeToFile = ({title, description, install, usage, contribute, test, license, profile, email }) =>
    `# **${title}**

    ## Description 

        ${description}

    ## Table of Contents 

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contributing)
    - [Testing](#tests)
    - [Questions/Contact](#questions)

    ## Installation 

        ${install}

    ## Usage

        ${usage}

    ## License 

        ${license}

    ## Contributing 

        ${contribute}

    ## Tests

        ${test}

    ## Questions

        Reach me and all of my projects through Github @ 
        https://github.com/${profile}
        for further questions email me directly @
        ${email}`;



// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((answers) => writeFile('README.md', writeToFile(answers)))
        .then(() => console.log('README successfully created!'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
