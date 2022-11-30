#! /usr/bin/env node
import inquirer from 'inquirer';
let userID = Math.floor((Math.random() * 9000) + 1000);
console.log(userID);
let userPin = Math.floor((Math.random() * 9000) + 1000);
console.log(userPin);
const rExp = /(^\d{4}$)/;
inquirer
    .prompt([
    {
        type: "input",
        name: "id",
        message: "Please enter your ID",
        validate: (answer) => {
            if (isNaN(answer)) {
                return "Please enter a valid number";
            }
            else if (rExp.test(answer) != true) {
                return "Invalid ID";
            }
            else if (answer != userID) {
                return "Invalid ID";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "pin",
        message: "Please enter your PIN",
        validate: (answer) => {
            if (isNaN(answer)) {
                return "Please enter a valid number";
            }
            else if (rExp.test(answer) != true) {
                return "Incorrect PIN";
            }
            else if (answer != userPin) {
                return "Incorrect PIN";
            }
            return true;
        }
    }
])
    .then((answers) => {
    if (answers.id == userID && answers.pin == userPin) {
        console.log("Welcome back!");
    }
});
