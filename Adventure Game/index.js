import inquirer from "inquirer";
class Player {
    name;
    fuel;
    constructor(name) {
        this.name = name;
        this.fuel = 100;
    }
    fuelDecrease() {
        let fuel = this.fuel - 5;
        this.fuel = fuel;
    }
    drinkFuel() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel;
    constructor(name) {
        this.name = name;
        this.fuel = 0;
    }
    fuelDecrease() {
        let fuel = this.fuel - 5;
        this.fuel = fuel;
    }
}
async function gameLoop() {
    const name = await inquirer.prompt({
        type: "input",
        name: "player",
        message: "Enter your Player's name:",
    });
    const player = new Player(name.player);
    const oppoName = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select Your Opponent:",
        choices: ["Skeleton", "Assassin", "Zombi"],
    });
    const opponent = new Opponent(oppoName.select);
    while (true) {
        if (oppoName.select === "Skeleton") {
            console.log(`${name.player} & ${oppoName.select}`);
            await work();
        }
        else if (oppoName.select === "Assassin") {
            console.log(`${name.player} & ${oppoName.select}`);
            await work();
        }
        else if (oppoName.select === "Zombi") {
            console.log(`${name.player} & ${oppoName.select}`);
            await work();
        }
        async function work() {
            let work = await inquirer.prompt({
                type: "list",
                name: "select",
                message: "Select Your Opponent:",
                choices: ["Attack", "Drink ocean", "Run for Your life"],
            });
            if (work.select === "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    player.fuelDecrease();
                    console.log(`${player.name} and fuel:${player.fuel}`);
                    console.log(`${opponent.name} and fuel:${opponent.fuel}`);
                    if (player.fuel <= 0) {
                        console.log("You loose, better next time");
                        process.exit();
                    }
                }
                else if (num <= 0) {
                    opponent.fuelDecrease();
                    console.log(`${player.name} and fuel:${player.fuel}`);
                    console.log(`${opponent.name} and fuel:${opponent.fuel}`);
                    if (opponent.fuel <= 0) {
                        console.log("You are winnner");
                        process.exit();
                    }
                }
            }
            else if (work.select === "Drink ocean") {
                player.drinkFuel();
                console.log(`You drink ocean. Your fuel : ${player.fuel}`);
            }
            else if (work.select === "Run for Your life") {
                console.log("You loose, better next time");
                process.exit();
            }
        }
    }
}
// Start the game loop
gameLoop();
