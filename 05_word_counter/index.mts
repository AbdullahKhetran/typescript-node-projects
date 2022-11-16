import inquirer from 'inquirer';

// using regex to know number of words
function wordCount(text: string) {
    return text.split(/\S+/).length - 1;
};

// remove whitespaces to count characters
function charCount(text: string) {
    return text.trim().length
}

inquirer
    .prompt([
        {
            type: "list",
            name: "choice",
            message: "Which operation do you want to peform?",
            choices: ["Count characters", "Count words"]
        },

        {
            type: "input",
            name: "para",
            message: "Type the paragraph to perform selected operation",
        },

    ])
    .then((answers) => {
        if (answers.choice == "Count characters") {
            console.log(charCount(answers.para))
        } else if (answers.choice == "Count words") {
            console.log(wordCount(answers.para))
        }
    }
    )