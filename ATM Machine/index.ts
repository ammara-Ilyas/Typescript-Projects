import inquirer from "inquirer";
import { faker } from "@faker-js/faker";

interface userType {
  name: string;
  id: number;
  pinCode: number;
  accountNumber: number;
  balance: number;
}
let userData: userType[] = [];
let requirData = () => {
  for (let x = 1; x <= 10; x++) {
    let user: userType = {
      name: `${faker.person.fullName()}`,
      id: x,
      pinCode: 1000 + x,
      accountNumber: Math.floor(Math.random() * 10000000000),
      balance: Math.floor(Math.random() * 100000 + 10000) * x,
    };
    userData.push(user);
  }
  return userData;
};
requirData();

let atmMachine = async (userData: userType[]) => {
  let takingPin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter Your Pin code",
  });
  let user = userData.find((val) => {
    return val.pinCode == takingPin.pin;
  });

  // user
  if (user) {
    console.log(`Welcome ${user.name}`);
    atmFunction(user);
  } else {
    console.log("Invalid Pin code");
  }
};

atmMachine(userData);
let atmFunction = async (user: userType) => {
  let response = await inquirer.prompt({
    name: "Function",
    type: "list",
    message: "What would you like to do:",
    choices: ["Withdrawal", "Balance", "Deposit", "Transfer"],
  });

  if (response.Function == "Withdrawal") {
    WithdrawalFunc(user);
  } else if (response.Function == "Balance") {
    console.log(`Balance : ${user.balance}`);
  } else if (response.Function == "Deposit") {
    deposit(user);
  } else if (response.Function == "Transfer") {
    transferFunc(user);
  }
};

let deposit = async (user: userType) => {
  let Deposit = await inquirer.prompt({
    name: "amDeposit",
    type: "number",
    message: "Enter Amount",
  });
  console.log(`Balance : ${user.balance + Deposit.amDeposit}`);
};
let WithdrawalFunc = async (user: userType) => {
  let amount = await inquirer.prompt({
    name: "rupees",
    type: "number",
    message: "Enter Amount",
  });
  if (amount.rupees > user.balance) {
    console.log("Balance is insufficient");
  } else {
    console.log(`Withdrawal Amount: ${amount.rupees}`);
    console.log(`Remaing Balance: ${user.balance - amount.rupees}`);
  }
};
let transferFunc = async (user: userType) => {
  let Transfer = await inquirer.prompt({
    name: "ammoutTransfer",
    type: "number",
    message: "Enter Amount",
  });
  if (Transfer.ammoutTransfer > user.balance) {
    console.log("Insufficient Balance");
  } else {
    console.log(`${Transfer.ammoutTransfer} is transferred`);
    console.log(`Remaing Balance : ${user.balance - Transfer.ammoutTransfer}`);
  }
};
