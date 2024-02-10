import inquirer from "inquirer";

class Player {
  name: string;
  currentRoom: Room;

  constructor(name: string, currentRoom: Room) {
    this.name = name;
    this.currentRoom = currentRoom;
  }

  move(direction: string) {
    const nextRoom = this.currentRoom.getExit(direction);

    if (nextRoom) {
      this.currentRoom = nextRoom;
      console.log(`You moved to ${this.currentRoom.name}`);
    } else {
      console.log("You can't go that way!");
    }
  }

  lookAround() {
    console.log(`You are in ${this.currentRoom.name}`);
    console.log(`Exits: ${this.currentRoom.getExits().join(", ")}`);
  }
}

// Define a class for the Room
class Room {
  name: string;
  exits: Record<string, Room>;

  constructor(name: string) {
    this.name = name;
    this.exits = {};
  }

  addExit(direction: string, room: Room) {
    this.exits[direction] = room;
  }

  getExit(direction: string): Room | undefined {
    return this.exits[direction];
  }

  getExits(): string[] {
    return Object.keys(this.exits);
  }
}

// Example: Creating rooms and connecting them
const room1 = new Room("Room 1");
const room2 = new Room("Room 2");
const room3 = new Room("Room 3");

room1.addExit("north", room2);
room2.addExit("south", room1);
room2.addExit("east", room3);
room3.addExit("west", room2);

// Example: Creating a player and placing them in a starting room
const player = new Player("Player1", room1);

// Example: Taking input from the player
// Note: This is a simplified example; in a real game, you would use a more sophisticated input mechanism.

function gameLoop() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "command",
        message: "Enter your command:",
      },
    ])
    .then((answers) => {
      processCommand(answers.command.trim().toLowerCase());
      gameLoop(); // Continue the game loop
    });
}

function processCommand(command: string) {
  if (command.startsWith("move")) {
    const direction = command.split(" ")[1];
    player.move(direction);
  } else if (command === "look") {
    player.lookAround();
  } else {
    console.log("Invalid command. Try 'move <direction>' or 'look'.");
  }
}

// Start the game loop
gameLoop();
