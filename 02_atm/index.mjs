import inquirer from 'inquirer';
let userID = Math.floor((Math.random() * 100) + 1);
let userPin = Math.floor((Math.random() * 1000) + 1);
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
            else if (answer != userID) {
                return "Invalid User ID";
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
            else if (answer != userPin) {
                return "Invalid PIN";
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
