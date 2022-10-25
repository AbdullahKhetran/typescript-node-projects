import inquirer from 'inquirer';
function wordCount(text) {
    return text.split(/\S+/).length - 1;
}
;
function charCount(text) {
    return text.trim().length;
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
        console.log(charCount(answers.para));
    }
    else if (answers.choice == "Count words") {
        console.log(wordCount(answers.para));
    }
});
