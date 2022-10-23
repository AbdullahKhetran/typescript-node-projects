import inquirer from 'inquirer';


let questions: object[] = [
    {
        type: "list",
        name: "task",
        message: "Which task would you like to perform?",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],

    },
    {
        type: "input",
        name: "num1",
        message: "Enter 1st number",
        validate: (answer: number) => {
            if (isNaN(answer)) {
                return "Please enter a valid number";
            }
            return true
        }
    },
    {
        type: "input",
        name: "num2",
        message: "Enter 2nd number",
        validate: (answer: number) => {
            if (isNaN(answer)) {
                return "Please enter a valid number";
            }
            return true
        }
    }

]

inquirer
    .prompt(questions)
    .then((answers: any) => {
        // Use user feedback for... whatever!!
        const num1: number = parseFloat(answers.num1);
        const num2: number = parseFloat(answers.num2);
        const task: string = answers.task;


        if (task === "Addition") {
            console.log("Answer: ", (num1 + num2))
        } else if (task === "Subtraction") {
            console.log("Answer: ", (num1 - num2))
        } else if (task === "Multiplication") {
            console.log("Answer: ", (num1 * num2))
        } else if (task === "Division") {
            console.log("Answer: ", (num1 / num2).toFixed(2))
        }

    })