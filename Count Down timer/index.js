//////////////////////////////// Countdown timer/////////////
import inquirer from "inquirer";
class CountdownTimer {
    duration;
    timerId;
    constructor(timeDuration) {
        this.duration = timeDuration;
        this.timerId = null;
    }
    minSecond(time) {
        let minute = Math.floor(time / 60);
        let second = time % 60;
        console.log(`Remaining Time : ${minute}:${second < 10 ? "0" : ""}${second}`);
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
        }
        else {
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
let starTime = await inquirer.prompt({
    name: "time",
    type: "input",
    message: "You can set the countdown timer for any time you want",
});
let timeInNumber = parseInt(starTime.time, 10);
const countdownTimer = new CountdownTimer(timeInNumber);
countdownTimer.start();
console.log(typeof starTime.time);
