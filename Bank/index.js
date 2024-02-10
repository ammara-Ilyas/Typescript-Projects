import inquirer from "inquirer";
class Account {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
        }
    }
}
class Customer {
    name;
    accounts;
    constructor(name) {
        this.name = name;
        this.accounts = [];
    }
    addAccount(initialBalance) {
        const account = new Account(initialBalance);
        this.accounts.push(account);
        console.log("Account created successfully.");
    }
    getAccounts() {
        return this.accounts;
    }
}
class Bank {
    customers;
    constructor() {
        this.customers = [];
    }
    addCustomer(name) {
        const customer = new Customer(name);
        this.customers.push(customer);
        console.log(`${name} customer added successfully.`);
    }
    getCustomers() {
        return this.customers;
    }
}
const myBank = new Bank();
async function addCustomer() {
    const cus = await inquirer.prompt({
        name: "nam",
        type: "input",
        message: "Enter Customer's name",
    });
    myBank.addCustomer(cus.nam);
}
async function startBankingSystem() {
    await addCustomer();
    async function showMenu() {
        const question = {
            type: "list",
            name: "option",
            message: "Enter your choice:",
            choices: [
                "Add Customer",
                "Add Account",
                "Deposit",
                "Withdraw",
                "Display Customer Information",
                "Exit",
            ],
        };
        const choice = await inquirer.prompt(question);
        console.log(myBank.getCustomers().length);
        if (choice.option === "Add Customer") {
            await addCustomer();
            await showMenu();
        }
        else if (choice.option === "Add Account") {
            await addAccount();
        }
        else if (choice.option === "Deposit") {
            await performTransaction("deposit");
        }
        else if (choice.option === "Withdraw") {
            await performTransaction("withdraw");
        }
        else if (choice.option === "Display Customer Information") {
            console.log("customer");
            await displayCustomerInformation();
        }
        else if (choice.option === "Exit") {
            console.log("Exiting the banking system. Goodbye!");
        }
        else {
            console.log("Invalid choice. Please enter a valid option.");
        }
    }
    async function addAccount() {
        const customerIndex = await getCustomerIndex();
        if (customerIndex !== -1) {
            const { initialBalance } = await inquirer.prompt({
                type: "input",
                name: "initialBalance",
                message: "Enter initial balance for the account:",
            });
            myBank
                .getCustomers()[customerIndex].addAccount(parseInt(initialBalance, 10));
            console.log("Account added successfully.");
            await showMenu();
        }
        else {
            console.log("Customer not found. Please add a customer first.");
            await showMenu();
        }
    }
    async function performTransaction(transactionType) {
        const customerIndex = await getCustomerIndex();
        if (customerIndex !== -1) {
            const accounts = myBank.getCustomers()[customerIndex].getAccounts();
            if (accounts.length > 0) {
                console.log("Select an account:");
                const accountChoices = accounts.map((_, index) => ({
                    name: `Account ${index + 1}`,
                    value: index,
                }));
                const { accountIndex } = await inquirer.prompt({
                    type: "list",
                    name: "accountIndex",
                    message: "Choose an account:",
                    choices: accountChoices,
                });
                const selectedAccount = accounts[accountIndex];
                const { amount } = await inquirer.prompt({
                    type: "input",
                    name: "amount",
                    message: `Enter the amount to ${transactionType}:`,
                });
                if (transactionType === "deposit") {
                    selectedAccount.deposit(parseInt(amount, 10));
                }
                else {
                    selectedAccount.withdraw(parseInt(amount, 10));
                }
                await showMenu();
            }
            else {
                console.log("No accounts found. Please add an account first.");
                await showMenu();
            }
        }
        else {
            console.log("Customer not found. Please add a customer first.");
            await showMenu();
        }
    }
    async function displayCustomerInformation() {
        const customerIndex = await getCustomerIndex();
        console.log("custom");
        if (customerIndex !== -1) {
            const customer = myBank.getCustomers()[customerIndex];
            console.log("\nCustomer Information:");
            console.log("Accounts:");
            const accounts = customer.getAccounts();
            accounts.forEach((account, index) => {
                console.log(`Account ${index + 1}: Balance - ${account.getBalance()}`);
            });
            await showMenu();
        }
        else {
            console.log("Customer not found. Please add a customer first.");
            await showMenu();
        }
        return showMenu();
    }
    async function getCustomerIndex() {
        const customerIndex = await inquirer.prompt({
            type: "input",
            name: "customerIndex",
            message: "Enter customer index:",
        });
        const index = parseInt(customerIndex.customerIndex);
        // const index = (ind);
        if (index >= 0 && index < myBank.getCustomers().length) {
            return index;
        }
        else {
            console.log("Invalid customer index.");
            return -1;
        }
    }
    await showMenu();
}
startBankingSystem();
