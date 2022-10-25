import inquirer from 'inquirer';
inquirer
    .prompt([
    {
        type: "input",
        name: "enter_task",
        message: "Enter a new task",
    },
])
    .then((answers) => {
    console.log("task saved");
});
