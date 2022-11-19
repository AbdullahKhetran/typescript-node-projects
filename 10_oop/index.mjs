import promptSync from "prompt-sync";
const prompt = promptSync();
import inquirer from 'inquirer';
let name;
let personality;
let questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (answer) => {
            if (answer === "") {
                return "Please enter your name";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "personality",
        message: "Are you and introvert or extrovert?",
        choices: ["Introvert", "Extrovert"]
    }
];
inquirer
    .prompt(questions)
    .then((answers) => {
    name = answers.name;
    if (answers.personality === "Introvert") {
        personality = "Introvert";
    }
    else if (answers.personality === "Extrovert") {
        personality = "Extrovert";
    }
    console.log(`Your name is ${name} and your personality type is ${personality}`);
});