#! /usr/bin/env node
import inquirer from 'inquirer';
let num = Math.random();
num = num * 10;
num += 1;
num = Math.floor(num);
inquirer
    .prompt([
    {
        type: "input",
        name: "choice",
        message: "Guess the number computer choose from 1 to 10",
        validate: (answer) => {
            if (isNaN(answer)) {
                return "Please enter a valid number";
            }
            else if (answer > 10 || answer < 1) {
                return "Hint: Number is between 1 (inclusive) and 10";
            }
            return true;
        }
    }
])
    .then((answers) => {
    if (answers.choice == num) {
        console.log("Bravo! You guessed the number correctly");
    }
    else {
        console.log("Wrong answer. Better luck next time");
    }
});
