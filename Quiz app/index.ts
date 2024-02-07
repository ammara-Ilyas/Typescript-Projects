import inquirer from "inquirer";
import chalk from "chalk";
interface questionType {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  corectAnswer: string;
}

let Question: questionType[] = [
  {
    question: "What is TypeScript primarily known for adding to JavaScript?",
    option1: "Dynamic Typing",
    option2: "Static Typing",
    option3: "Functional Programming",
    option4: "Prototype-based Inheritan",
    corectAnswer: "Static Typing",
  },
  {
    question:
      "Which keyword is used to define a variable with an explicit type in TypeScript?",
    option1: "var",
    option2: "let",
    option3: "const",
    option4: "declare",
    corectAnswer: "declare",
  },
  {
    question: "What is TypeScript primarily known for adding to JavaScript?",
    option1: "Dynamic Typing",
    option2: "Static Typing",
    option3: "Functional Programming",
    option4: "Prototype-based Inheritan",
    corectAnswer: "Static Typing",
  },
  {
    question: "What does the readonly modifier do in TypeScript?  ",
    option1: " Allows only reading properties but not writing",
    option2: "Allows only writing properties but not reading",
    option3: " Allows both reading and writing properties",
    option4: " Prevents the use of the variable",
    corectAnswer: " Allows only reading properties but not writing",
  },
  {
    question: "Which operator is used for type assertion in TypeScript?  ",
    option1: ":",
    option2: "::",
    option3: "->",
    option4: "==",
    corectAnswer: ":",
  },
  {
    question:
      "What is the purpose of the tsconfig.json file in a TypeScript project?  ",
    option1: " To configure the TypeScript compiler options",
    option2: "To specify the runtime environment",
    option3: "To define package dependencies",
    option4: "To manage unit tests  ",
    corectAnswer: " To configure the TypeScript compiler options",
  },
  {
    question: " What is TypeScript? ",
    option1: " A JavaScript library",
    option2: " A superset of JavaScript",
    option3: "A new programming language",
    option4: "A style guide for JavaScript ",
    corectAnswer: "  A superset of JavaScript",
  },
  {
    question:
      " How do you declare a variable in TypeScript using the let keyword? ",
    option1: "variable x: number;",
    option2: " let x = number;",
    option3: "let x: number;",
    option4: " var x: number;  ",
    corectAnswer: " let x: number",
  },
  {
    question: "What is the purpose of the TypeScript compiler (tsc)?",
    option1: "  To transpile TypeScript code to JavaScript code",
    option2: "To minify TypeScript code",
    option3: "To define package dependencies",
    option4: "To run TypeScript code directly ",
    corectAnswer: "  To transpile TypeScript code to JavaScript code",
  },
  {
    question: " What is the purpose of the interface keyword in TypeScript?",
    option1: " To create a new instance of a class",
    option2: "To define a blueprint for a class",
    option3: " To import external libraries",
    option4: "To declare a variable  ",
    corectAnswer: " To define a blueprint for a class",
  },
  {
    question:
      "How can you specify that a function parameter is optional in TypeScript?",
    option1: "Using the optional keyword",
    option2: "Using the ? symbol after the parameter name",
    option3: "Using the optional modifier",
    option4: "TypeScript does not support optional parameters",
    corectAnswer: "  Using the ? symbol after the parameter name",
  },
];
let sName = await inquirer.prompt({
  name: "name",
  type: "input",
  message: "What is your name",
});
console.log(chalk.bold.red("Typescript Proficiency Quiz"));
let score: number = 0;
for (let i = 0; i < Question.length; i++) {
  let answer = await inquirer.prompt({
    name: "ques",
    type: "list",
    message: Question[i].question,
    choices: [
      Question[i].option1,
      Question[i].option2,
      Question[i].option3,
      Question[i].option4,
    ],
  });
  console.log(answer.ques);
  if (answer.ques === Question[i].corectAnswer) {
    console.log("correct");
    score++;
  } else {
    console.log(
      chalk.italic.blackBright(
        chalk.bold.red(`Correct answer is ${Question[i].corectAnswer}`)
      )
    );
  }
}
console.log(
  chalk.italic.blueBright(`Dear ${sName.name}! Your Score: ${score}`)
);
