#! /usr/bin/env node
import inquirer from 'inquirer';

let userID: number = Math.floor((Math.random() * 9000) + 1000);
// 4 digit user id but it can't start with 0
console.log(userID);

let userPin: number = Math.floor((Math.random() * 9000) + 1000);
console.log(userPin);

const rExp: RegExp = /(^\d{4}$)/
// making sure user dosen't pass 00xxxx instead of xxxx

inquirer
    .prompt([
        {
            type: "input",
            name: "id",
            message: "Please enter your ID",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return "Please enter a valid number"
                } else if (rExp.test(answer) != true) {
                    return "Invalid ID"
                } else if (answer != userID) {
                    return "Invalid ID"
                }
                return true
            }
        },
        {
            type: "input",
            name: "pin",
            message: "Please enter your PIN",
            validate: (answer) => {
                if (isNaN(answer)) {
                    return "Please enter a valid number"
                } else if (rExp.test(answer) != true) {
                    return "Incorrect PIN"
                } else if (answer != userPin) {
                    return "Incorrect PIN"
                }
                return true
            }
        }
    ])
    .then((answers) => {
        if (answers.id == userID && answers.pin == userPin) {
            console.log("Welcome back!");
        }
    }); 