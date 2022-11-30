#! /usr/bin/env node
import promptSync from "prompt-sync";
const prompt = promptSync();

import inquirer from 'inquirer';

let tutorial = "The objective is to kill all the enemies.\nYou start with 100 health and your each enemy have 100 health.\nYou will have 2 potions to consume with each giving you extra 40 health.\nThere is also a chance that the enemy drops a potion after it is killed.\nYour each hit will inflict 25 damage to enemy.\nEnemies damage depends on their level.\nThe higher the level, the higher the damage.";

let potion = 2;
let potionHealth = 40;

let playerHealth = 100;
// let enemyHealth = 100;

let index = 0; // defining index number for array
let level = 1;

let playerDamage = 25;

let enemies = [
    {
        name: "Warrior",
        damage: 5,
        health: 100,
    }, {
        name: "Assasian",
        damage: 10,
        health: 100,
    }, {
        name: "Zombie",
        damage: 15,
        health: 100,
    }, {
        name: "Skeleton",
        damage: 20,
        health: 100,
    },
]

function reset() {
    potion = 2;

    playerHealth = 100;

    index = 0;
    level = 1;

    for (let i = 0; i < enemies.length; i++) {
        enemies[0].health = 100;
    }
}

// on killing enemy there is ~50% chance that player gets a potion
function checkPotion() {
    let number = Math.random();
    if (number > 0.5) {
        potion++
        console.log(`You got a potion! Now you have ${potion} potions`)
    }
}

function showStats() {
    console.log(`Stats:\n\tLevel: ${level}\n\tHealth: ${playerHealth}\n\tPotions: ${potion}`)
}

function showHealth() {
    console.log(`Your health is ${playerHealth}\n${enemies[index].name}'s health is ${enemies[index].health}`)
}

function mainMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "mainMenu",
                message: "What would you like to do?",
                choices: ["Start Game", "Read Tutorial", "Quit Game"]
            }
        ])
        .then((answers) => {
            if (answers.mainMenu === "Read Tutorial") {
                console.log(tutorial);
                mainMenu();
            } else if (answers.mainMenu === "Start Game") {
                console.log(`You are now at level ${level}\nYou have ${potion} potions left\nYour enemy is ${enemies[index].name}`)
                attackOrDrink()
            }
        })
}

function attackOrDrink() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What would you like to do?",
                choices: ["Attack", "Drink potion"]
            }
        ])
        .then((answers) => {
            if (answers.choice === "Drink potion") {
                if (potion < 1) {
                    console.log(`You have no potions left`);
                    attackOrDrink()
                } else {
                    potion--;
                    playerHealth += potionHealth;
                    console.log(`Your health has increased to ${playerHealth}`);
                    attackOrDrink()
                }

            } else if (answers.choice === "Attack") {
                playerHealth -= enemies[index].damage;
                enemies[index].health -= playerDamage;

                console.log(`You dealt ${playerDamage} damage and suffered ${enemies[index].damage} damage`)
                if (playerHealth < 1) {
                    console.log(`You have been killed. Better luck next time`)
                    reset()
                    mainMenu()
                    return
                }
                showHealth()

                if (enemies[index].health < 1) {
                    level++;
                    if (level > enemies.length) {
                        console.log("Congratulations, You have completed the game!");
                        return
                    }
                    checkPotion()
                    console.log(`You have sucessfully killed ${enemies[index].name}. You are now at level ${level}`)
                    showStats()
                    index++;


                }
                attackOrDrink()


            }
        })
}
mainMenu()
