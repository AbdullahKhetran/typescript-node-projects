import promptSync from "prompt-sync";
const prompt = promptSync();
import inquirer from 'inquirer';
let minutes;
let seconds;
inquirer
    .prompt([
    {
        type: "number",
        name: "minutes",
        message: "Set the number of minutes",
        validate(answer) {
            if (isNaN(answer)) {
                return "Please enter a number";
            }
            else if (answer > 59) {
                return "Please enter minutes upto 59";
            }
            else if (answer < 0) {
                return "Minutes can't be less than 0";
            }
            return true;
        }
    }, {
        type: "number",
        name: "seconds",
        message: "Set the number of seconds",
        validate(answer) {
            if (isNaN(answer)) {
                return "Please enter a number";
            }
            else if (answer > 59) {
                return "Please enter seconds upto 59";
            }
            else if (answer < 0) {
                return "Seconds can't be less than 0";
            }
            return true;
        }
    }
])
    .then((answers) => {
    if (answers.minutes === 0 && answers.seconds === 0) {
        console.log("Both minutes and seconds can't be 0");
    }
    else {
        minutes = answers.minutes;
        seconds = answers.seconds;
        timer();
    }
});
function timer() {
    let display = setInterval(() => {
        if (seconds === 0 && minutes === 0) {
            console.log(`${minutes}:${seconds} Time's up`);
            clearInterval(display);
        }
        else {
            console.log(`${minutes}:${seconds}`);
            seconds--;
            if (seconds === -1 && minutes > 0) {
                minutes--;
                seconds = 59;
            }
        }
    }, 1000);
}
