import inquirer, { QuestionCollection } from "inquirer";
import chalk from "chalk";

let randomNumber = Math.floor(Math.random() * 100);
let guessArray: number[] = [];
let guess: number = 0;
console.log(
  chalk.italic.red("Your attempts to play the number guessing game are 10")
);

let question1: QuestionCollection = [
  {
    name: "gueesNo",
    type: "number",
    message: "Write your guess between 1/100",
    validate: (input) => {
      if (isNaN(input)) {
        console.log("Guess should be in Number");
      } else if (input < 0) {
        console.log("Guess Number should be greater than 0");
      } else if (input > 100) {
        return "Guess Number should be smaller than 100";
      }
      return true;
    },
  },
];
const numberGuessing = async () => {
  while (true) {
    try {
      let guesingNo = await inquirer.prompt(question1);
      if (guesingNo.gueesNo == randomNumber) {
        console.log(chalk.red("Congrats! Your answer is correct"));
        break;
      } else if (guesingNo.gueesNo < randomNumber) {
        console.log(chalk.green("Your number is too smaller..."));
      } else if (guesingNo.gueesNo > randomNumber) {
        console.log(chalk.green("Your number is too greater..."));
      } else {
        console.log(chalk.red("Your answer is wrong.Try again"));
      }
      ///guessNo push in array
      guessArray.push(guesingNo.gueesNo);
      console.log(chalk.blackBright(guessArray));

      ///10 attempts
      guess++;
      console.log(chalk.bold.blue(`Remaining attempts are ${10 - guess}`));
      if (guess == 10) {
        break;
      }
    } catch (error) {
      console.log(error);
    }
  }
};
numberGuessing();
