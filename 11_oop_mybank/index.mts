import promptSync from "prompt-sync";
const prompt = promptSync();

import inquirer from 'inquirer';

let firstName: string;
let lastName: string;
let gender: string;
let age: number;
let number: string;

let balance = 500; // will be starting with 500 balance
let fee = 1; // charge this fee if amount > 100 is credited

// assume we are getting this info from database
function getInfo() {
    firstName = "John";
    lastName = "Smith";
    gender = "Male";
    age = 24;
    number = "+15551235555";
}
getInfo(); // all info is fetched from database

// functionality for debiting amount
function debit(amount: number) {
    if (amount <= 0) {
        console.log("Kindly enter a valid amount")
    } else if (amount > balance) {
        console.log("Insufficent balance! Transaction could not be processed")
    } else {
        balance -= amount;
        console.log(`$${amount} has been debited. Your new account balance is $${balance}`)
    }
}

// functionality for crediting amount
function credit(amount: number) {
    if (amount <= 0) {
        console.log("Kindly enter a valid amount")
    } else if (amount > 100) {
        balance += (amount - fee);
        console.log(`$${amount} has been credited with a fee of $${fee}. Your new account balance is $${balance}`);
    } else {
        balance += amount;
        console.log(`$${amount} has been credited. Your new account balance is $${balance}`);
    }
}

// show balance
function checkBalance() {
    console.log(`Your current balance is $${balance}`)
}

// if user wants to view his/her information
function viewProfile() {
    console.log(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Gender: ${gender}
    Age: ${age}
    Phone Number: ${number}`)
}

// the main program which will ask user questions
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
                viewProfile()
                mainMenu()
            } else if (answers.mainMenu === "Check balance") {
                checkBalance()
                mainMenu()
            } else if (answers.mainMenu === "Receive money") {
                receive();
                mainMenu()
            } else if (answers.mainMenu === "Send money") {
                send()
                mainMenu()
            }
        })
}

// will ask user how much amount is to be credited and invoke credit function
function receive() {
    let receiveMoney = Number(prompt("How much money do you want to receive? "))
    if (isNaN(receiveMoney)) {
        console.log("Kindly enter a valid number");
        receive()
    } else {
        credit(receiveMoney);
    }
}

// will ask user how much amount is to be debited and invoke debit function
function send() {
    let sendMoney = Number(prompt("How much money do you want to send? "))
    if (isNaN(sendMoney)) {
        console.log("Kindly enter a valid number");
        send()
    } else {
        debit(sendMoney);
    }
}

mainMenu();