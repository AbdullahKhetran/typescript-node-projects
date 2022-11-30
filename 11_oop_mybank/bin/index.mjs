#! /usr/bin/env node
import promptSync from "prompt-sync";
const prompt = promptSync();
import inquirer from 'inquirer';
let firstName;
let lastName;
let gender;
let age;
let number;
let balance = 500;
let fee = 1;
function getInfo() {
    firstName = "John";
    lastName = "Smith";
    gender = "Male";
    age = 24;
    number = "+15551235555";
}
getInfo();
function debit(amount) {
    if (amount <= 0) {
        console.log("Kindly enter a valid amount");
    }
    else if (amount > balance) {
        console.log("Insufficent balance! Transaction could not be processed");
    }
    else {
        balance -= amount;
        console.log(`$${amount} has been debited. Your new account balance is $${balance}`);
    }
}
function credit(amount) {
    if (amount <= 0) {
        console.log("Kindly enter a valid amount");
    }
    else if (amount > 100) {
        balance += (amount - fee);
        console.log(`$${amount} has been credited with a fee of $${fee}. Your new account balance is $${balance}`);
    }
    else {
        balance += amount;
        console.log(`$${amount} has been credited. Your new account balance is $${balance}`);
    }
}
function checkBalance() {
    console.log(`Your current balance is $${balance}`);
}
function viewProfile() {
    console.log(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Gender: ${gender}
    Age: ${age}
    Phone Number: ${number}`);
}
function mainMenu() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "Which would you like to do?",
            choices: ["View my information", "Check balance", "Receive money", "Send money"]
        }
    ])
        .then((answers) => {
        if (answers.mainMenu === "View my information") {
            viewProfile();
            mainMenu();
        }
        else if (answers.mainMenu === "Check balance") {
            checkBalance();
            mainMenu();
        }
        else if (answers.mainMenu === "Receive money") {
            receive();
            mainMenu();
        }
        else if (answers.mainMenu === "Send money") {
            send();
            mainMenu();
        }
    });
}
function receive() {
    let receiveMoney = Number(prompt("How much money do you want to receive? "));
    if (isNaN(receiveMoney)) {
        console.log("Kindly enter a valid number");
        receive();
    }
    else {
        credit(receiveMoney);
    }
}
function send() {
    let sendMoney = Number(prompt("How much money do you want to send? "));
    if (isNaN(sendMoney)) {
        console.log("Kindly enter a valid number");
        send();
    }
    else {
        debit(sendMoney);
    }
}
mainMenu();
