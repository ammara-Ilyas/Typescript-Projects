import inquirer from "inquirer";
import chalk from "chalk";
let toDosList: string[] = [];
await addTodo();

async function startTodo() {
  while (true) {
    try {
      let select = await inquirer.prompt({
        name: "option",
        type: "list",
        message: "What do you want",
        choices: ["Add", "Update", "View", "Delete", "Exit"],
      });
      if (select.option === "Add") {
        await addTodo();
      } else if (select.option === "Update") {
        await updateTodo();
      } else if (select.option === "View") {
        toDosList.forEach((item, i) => {
          console.log(chalk.blueBright(`${i} : ${item}`));
        });
      } else if (select.option === "Delete") {
        await deletTodo();
      } else if (select.option === "Exit") {
        break;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
startTodo();
//For new todo add
async function addTodo() {
  let result = await inquirer.prompt({
    name: "todo",
    type: "input",
    message: "Enter Your To-Do",
  });
  if (result.todo) {
    toDosList.push(result.todo);
    console.log("Current To-Do List:");
    console.log(chalk.greenBright(toDosList));
  }
}
//for  update todo
async function updateTodo() {
  let update = await inquirer.prompt({
    name: "update",
    type: "list",
    message: "Select one for update",
    choices: toDosList.map((item) => item),
  });
  // todo which update
  let result = await inquirer.prompt({
    name: "newtodo",
    type: "input",
    message: "Enter Your To-Do ",
  });
  let newList = toDosList.filter((updat) => {
    console.log(updat);

    return updat !== update.update;
  });
  toDosList = [...newList, result.newtodo];
  console.log(toDosList);
}
//for delete to do
async function deletTodo() {
  let Delet = await inquirer.prompt({
    name: "delete",
    type: "list",
    message: "Select one for update",
    choices: toDosList.map((item) => item),
  });
  let dltList = toDosList.filter((delet) => {
    return delet !== Delet.delete;
  });
  toDosList = [...dltList];
  console.log("Current To-Do List:");
  console.log(dltList);
}
