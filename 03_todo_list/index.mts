import inquirer from 'inquirer';


inquirer
    .prompt([
        {
            type: "input",
            name: "enter_task",
            message: "Enter a new task",

            validate: (answer) => {
                if (answer == "") {
                    return "Please enter something"
                }
                return true
            }
        }

    ])
    .then(() => {
        console.log("task saved");
    }
    )