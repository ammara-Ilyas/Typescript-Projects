//////////////////////////////// Countdown timer/////////////
import inquirer from "inquirer";
class CountdownTime {
  private duration: number;
  private timerId: NodeJS.Timeout | null;
  constructor(timeDuration: number) {
    this.duration = timeDuration;
    this.timerId = null;
  }
  minSecond(time: number) {
    let minute = Math.floor(time / 60);
    let second = time % 60;
    console.log(
      `Remaining Time : ${minute}:${second < 10 ? "0" : ""}${second}`
    );
  }
  start() {
    this.timerId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }
  updateTimer() {
    if (this.duration <= 0) {
      this.stop();
      this.timerId = null;
      console.log("Counterdown Timer completed");
    } else {
      this.minSecond(this.duration);
      this.duration--;
    }
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
async function CountdownTimer() {
  let starTime = await inquirer.prompt({
    name: "time",
    type: "input",
    message: "You can set the countdown timer for any time you want",
  });
  let timeInNumber: number = parseInt(starTime.time, 10);
  const countdownTimer = new CountdownTime(timeInNumber);
  countdownTimer.start();
}
CountdownTimer();
