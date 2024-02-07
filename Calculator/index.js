import inquirer from "inquirer";
import chalk from "chalk";
let CalculatorRun = async () => {
    while (true) {
        let question = [
            {
                name: "number1",
                type: "number",
                message: "Enter the First Number",
            },
            {
                name: "operation",
                type: "list",
                message: "Choice the operation",
                choices: ["+", "-", "*", "/"],
            },
            {
                name: "number2",
                type: "number",
                message: "Enter the Second Number",
            },
        ];
        try {
            let takeInput = await inquirer.prompt(question);
            if (takeInput.operation == "+") {
                console.log(chalk.bgRedBright.blueBright(`${takeInput.number1} + ${takeInput.number2} = ${takeInput.number1 + takeInput.number2}`));
            }
            else if (takeInput.operation == "-") {
                console.log(chalk.bgGreenBright.black(`${takeInput.number1} - ${takeInput.number2} = ${takeInput.number1 - takeInput.number2}`));
            }
            else if (takeInput.operation == "*") {
                console.log(chalk.bgCyan.red(`${takeInput.number1} * ${takeInput.number2} = ${takeInput.number1 * takeInput.number2}`));
            }
            else if (takeInput.operation == "/") {
                console.log(chalk.bgGreen.blue(`${takeInput.number1} / ${takeInput.number2} = ${takeInput.number1 / takeInput.number2}`));
            }
            let exit = await inquirer.prompt({
                name: "yesNo",
                type: "list",
                message: "Do you want to star over, calculator",
                choices: ["yes", "no"],
            });
            if (exit.yesNo === "no") {
                console.log(chalk.italic.green("Thank you for using calculator..."));
                break;
            }
        }
        catch {
            console.log("error");
        }
    }
};
CalculatorRun();
