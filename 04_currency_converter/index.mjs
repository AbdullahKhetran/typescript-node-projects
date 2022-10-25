import inquirer from 'inquirer';
const cr1 = "PKR (Pakistani Rupee)";
const cr2 = "USD (United States Dollar)";
let rate = 220;
let converted;
inquirer
    .prompt([
    {
        type: "list",
        name: "base",
        message: "Which currency do you want to convert?",
        choices: [cr1, cr2],
        default: cr1,
    },
    {
        type: "number",
        name: "amount",
        message: "How much you want to convert",
        validate: (answer) => {
            if (isNaN(answer)) {
                return "Enter a valid number";
            }
            return true;
        }
    },
])
    .then((answers) => {
    if (answers.base == cr1) {
        converted = answers.amount / rate;
        console.log(`${answers.amount} PKR is equal to ${converted} USD`);
    }
    else if (answers.base == cr2) {
        converted = parseFloat((answers.amount * rate).toFixed(2));
        console.log(`${answers.amount} USD is equal to ${converted} PKR`);
    }
});
