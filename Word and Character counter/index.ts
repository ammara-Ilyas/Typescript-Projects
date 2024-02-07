import inquirer from "inquirer";
import chalk from "chalk";

class wordCounter {
  constructor(public sentence: string) {}

  wordCount() {
    this.sentence = this.sentence.trim();
    let text = this.sentence.split(" ");
    let wordCounter = text.filter((word: string) => {
      return word != "";
    });
    console.log(chalk.green(this.sentence));

    console.log(chalk.blue(` Words : ${chalk.red(wordCounter.length)}`));
    console.log(
      chalk.blue(` Charchters : ${chalk.red(this.sentence.length)} `)
    );
  }
}
let wordCharCount = await inquirer.prompt({
  name: "sentence",
  type: "input",
  message: "Enter the Sentences",
});
//
let wordCounters = new wordCounter(wordCharCount.sentence);
wordCounters.wordCount();
