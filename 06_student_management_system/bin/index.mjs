#! /usr/bin/env node
import promptSync from "prompt-sync";
const prompt = promptSync();
import inquirer from 'inquirer';
const fees = 1000;
let userData = [
    {
        name: "admin",
        id: 123456,
        balance: 0,
        courses: [],
    }
];
function generateId() {
    return Math.floor((Math.random() * 90000) + 10000);
}
function register() {
    var userName = prompt("Enter your name to register ");
    let newUser = {
        name: userName,
        id: generateId(),
        balance: 0,
        courses: [],
    };
    console.log(`Your account details are Name: ${newUser.name} and ID : ${newUser.id}`);
    userData.push(newUser);
}
function logIn() {
    let nameInput = prompt("Enter your name ");
    let idInput = parseInt(prompt("Enter your id "));
    for (let i = 0; i < userData.length; i++) {
        if (nameInput == userData[i].name && idInput == userData[i].id) {
            console.log(`Welcome ${nameInput}`);
            global.currentUser = {
                name: nameInput,
                id: idInput,
            };
            taskStage();
            return;
        }
    }
    console.log("Incorrect name or id");
    menu();
}
function taskStage() {
    inquirer
        .prompt([{
            type: "list",
            name: "task",
            message: "What task would you like to do?",
            choices: ["View Status", "View Balance", "Enroll", "Pay Fees"]
        }])
        .then((answers) => {
        if (answers.task == "Enroll") {
            inquirer
                .prompt([{
                    type: "list",
                    name: "course",
                    message: "In which course would you like to enroll?",
                    choices: ["AI (Artificial Intelligenece)", "CNC (Cloud Native Computing)", "IOT (Internet of Things)"]
                }])
                .then((answers) => {
                console.log(`You have sucessfully enrolled in ${answers.course} course. Kindly pay fees`);
                for (let i = 0; i < userData.length; i++) {
                    if (userData[i].name == global.currentUser.name) {
                        userData[i].balance += 1000;
                        userData[i].courses.push(`${answers.course}`);
                    }
                }
                taskStage();
            });
        }
        else if (answers.task == "View Balance") {
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].name == global.currentUser.name) {
                    console.log(userData[i].balance);
                }
            }
            taskStage();
        }
        else if (answers.task == "View Status") {
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].name == global.currentUser.name) {
                    console.log(`
                        Name: ${userData[i].name}
                        ID: ${userData[i].id}
                        Courses: ${userData[i].courses}
                        Balance: ${userData[i].balance}`);
                }
            }
            taskStage();
        }
        else if (answers.task == "Pay Fees") {
            for (let i = 0; i < userData.length; i++) {
                if (userData[i].name == global.currentUser.name) {
                    if (userData[i].courses.length == 0) {
                        console.log("You are not enrolled in any course.");
                        taskStage();
                    }
                    else {
                        inquirer
                            .prompt([{
                                type: "list",
                                name: "fees_course",
                                message: "Which course's fees do you want to pay?",
                                choices: userData[i].courses,
                            }])
                            .then((answers) => {
                            userData[i].balance -= 1000;
                            for (let j = 0; j < userData[i].courses.length; j++) {
                                if (userData[i].courses[j] == answers.fees_course) {
                                    userData[i].courses.splice(j, 1);
                                    break;
                                }
                            }
                            console.log(userData[i]);
                            console.log("Your fees has been paid, amount is deducted from the attached payment method account");
                            taskStage();
                        });
                    }
                }
            }
        }
    });
}
function menu() {
    inquirer
        .prompt([{
            type: "list",
            name: "entry",
            message: "Login or Register?",
            choices: ["Login", "Register"]
        }])
        .then((answers) => {
        if (answers.entry === "Register") {
            register();
            console.log("Let's login now");
            logIn();
        }
        else if (answers.entry === "Login") {
            logIn();
        }
    });
}
menu();
