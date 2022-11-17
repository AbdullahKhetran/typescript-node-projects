import promptSync from "prompt-sync";
const prompt = promptSync();

import inquirer from 'inquirer';

let totalQuestions = 5;
let correctAnswers = 0;
let score;

let questions = [
    {
        type: "list",
        name: "q1",
        message: "Which one of these is not a programming language?",
        choices: ["HTML", "JavaScript", "Python", "C++"]
    }, {
        type: "list",
        name: "q2",
        message: "How many squares are in chess board?",
        choices: ["16", "32", "48", "64"]
    }, {
        type: "list",
        name: "q3",
        message: "Which one of these was not a chess world champion?",
        choices: ["Bobby Fischer", "Garry Kasparov", "Magnus Carlsen", "John Smith"]
    }, {
        type: "list",
        name: "q4",
        message: "When did second world war end?",
        choices: ["1923", "1943", "1945", "1947"]
    }, {
        type: "list",
        name: "q5",
        message: "Which is the largest country in the world?",
        choices: ["China", "Russia", "USA", "India"]
    },
]

inquirer
    .prompt(questions)
    .then((answers) => {
        // checking if answers are correct
        if (answers.q1 === "HTML") {
            correctAnswers++;
        }
        if (answers.q2 === "64") {
            correctAnswers++;
        }
        if (answers.q3 === "John Smith") {
            correctAnswers++;
        }
        if (answers.q4 === "1943") {
            correctAnswers++;
        }
        if (answers.q5 === "Russia") {
            correctAnswers++;
        }
        // calculating score
        score = (correctAnswers / totalQuestions) * 100;
        // displaying result
        console.log(`
        You answered ${correctAnswers} questions correctly.
        Your score is ${score}%
        `)
    })
