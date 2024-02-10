import inquirer, { QuestionCollection } from "inquirer";
import chalk from "chalk";

let question3: QuestionCollection = [
  {
    name: "firstCurrency",
    type: "list",
    message: "Select Your Currency of Amount",
    choices: ["PKR", "USD", "GBP", "INR"],
  },
  {
    name: "secondCurrency",
    type: "list",
    message: "Select Your Conversion Currency",
    choices: ["PKR", "USD", "GBP", "INR"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter the Amount",
  },
];
const calculator = async () => {
  let answer = await inquirer.prompt(question3);

  if (isNaN(answer.amount)) {
    console.log("Invalid Amount");
  } else {
    if (answer.firstCurrency == "PKR") {
      pkrConvertor();
    } else if (answer.firstCurrency == "USD") {
      usdConvertor();
    } else if (answer.firstCurrency == "GBP") {
      gbpConvertor();
    } else if (answer.firstCurrency == "INR") {
      inrConveror();
    }
  }

  function pkrConvertor() {
    if (answer.secondCurrency == "PKR") {
      console.log(chalk.red(`${answer.amount} PKR = ${answer.amount} PKR`));
    } else if (answer.secondCurrency == "USD") {
      console.log(
        chalk.red(`${answer.amount} PKR = ${answer.amount * 0.0036} USD`)
      );
    } else if (answer.secondCurrency == "GBP") {
      console.log(
        chalk.red(`${answer.amount} PKR = ${answer.amount * 0.0028} GBP`)
      );
    } else if (answer.secondCurrency == "INR") {
      console.log(
        chalk.red(`${answer.amount} PKR = ${answer.amount * 0.3} INR`)
      );
    }
  }
  function usdConvertor() {
    if (answer.secondCurrency == "PKR") {
      console.log(
        chalk.red(`${answer.amount} USD = ${answer.amount * 279.81} PKR`)
      );
    } else if (answer.secondCurrency == "USD") {
      console.log(chalk.red(`${answer.amount} USD = ${answer.amount} USD`));
    } else if (answer.secondCurrency == "GBP") {
      console.log(
        chalk.red(`${answer.amount} USD = ${answer.amount * 0.79} GBP`)
      );
    } else if (answer.secondCurrency == "INR") {
      console.log(
        chalk.red(`${answer.amount} USD = ${answer.amount * 83.12} INR`)
      );
    }
  }
  function gbpConvertor() {
    if (answer.secondCurrency == "PKR") {
      console.log(
        chalk.red(
          `${answer.amount} GBP = ${Math.round(answer.amount * 355.61)} PKR`
        )
      );
    } else if (answer.secondCurrency == "USD") {
      console.log(
        chalk.red(`${answer.amount} GBP = ${answer.amount * 1.27} USD`)
      );
    } else if (answer.secondCurrency == "GBP") {
      console.log(chalk.red(`${answer.amount} GBP = ${answer.amount} GBP`));
    } else if (answer.secondCurrency == "INR") {
      console.log(
        chalk.red(`${answer.amount} GBP = ${answer.amount * 105.64} INR`)
      );
    }
  }
  function inrConveror() {
    if (answer.secondCurrency == "PKR") {
      console.log(
        chalk.red(
          `${answer.amount} INR = ${Math.round(answer.amount * 3.37)} PKR`
        )
      );
    } else if (answer.secondCurrency == "USD") {
      console.log(
        chalk.red(`${answer.amount} INR = ${answer.amount * 0.012} USD`)
      );
    } else if (answer.secondCurrency == "GBP") {
      console.log(
        chalk.red(`${answer.amount} INR = ${answer.amount * 0.0095} GBP`)
      );
    } else if (answer.secondCurrency == "INR") {
      console.log(chalk.red(`${answer.amount} INR = ${answer.amount} INR`));
    }
    if (answer.secondCurrency == "PKR") {
      console.log(
        chalk.red(
          `${answer.amount} INR = ${Math.round(answer.amount * 3.37)} PKR`
        )
      );
    } else if (answer.secondCurrency == "USD") {
      console.log(
        chalk.red(`${answer.amount} INR = ${answer.amount * 0.012} USD`)
      );
    } else if (answer.secondCurrency == "GBP") {
      console.log(
        chalk.red(`${answer.amount} INR = ${answer.amount * 0.0095} GBP`)
      );
    } else if (answer.secondCurrency == "INR") {
      console.log(chalk.red(`${answer.amount} INR = ${answer.amount} INR`));
    }
  }
};
calculator();
