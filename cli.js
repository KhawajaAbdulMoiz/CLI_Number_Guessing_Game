#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Step 1: Computer will generate a random number
// Step 2: User input for guessing number
// Step 3: Compare user input with computer generated number
// Step 4: Show the Result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(chalk.bgCyanBright.black.bold("--------------Welcome to Number Guessing Game--------------- \n"));
let guess = 5;
while (guess > 0) {
    const answers = await inquirer.prompt([
        {
            name: "UserGuessedNumber",
            type: "number",
            message: chalk.blue("Guess a Random Number from 1 to 10 : "),
        }
    ]);
    if (answers.UserGuessedNumber === randomNumber) {
        console.log(chalk.magentaBright("Congrats You Guess the Right Number"));
        process.exit(); //Closing the command
    }
    else {
        console.log(chalk.red("You Guess the Wrong Number"));
    }
    guess--; // Decrement the attempts
    if (guess > 0) {
        console.log(chalk.green(`Attempts left: ${guess}`));
    }
    else {
        console.log(chalk.red("Out of attempts. The correct number was: ", randomNumber));
    }
    console.log(answers);
}
