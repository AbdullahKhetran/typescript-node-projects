"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
// using regex to know number of words
function wordCount(text) {
    return text.split(/\S+/).length - 1;
}
;
// remove whitespaces to count characters
function charCount(text) {
    return text.trim().length;
}
inquirer_1["default"]
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
        message: "Type the paragraph to perform selected operation"
    },
])
    .then(function (answers) {
    if (answers.choice == "Count characters") {
        console.log(charCount(answers.para));
    }
    else if (answers.choice == "Count words") {
        console.log(wordCount(answers.para));
    }
});
