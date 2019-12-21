import { update } from './update';
import { finalData } from './literacy';
// import { timeLabel } from './legend';


export const button = () => {
let button = document.getElementById("play-button");
let time = 0;

function step() {
  // At the end of our data, loop back
  time = time < 15 ? time + 1 : 0;
  update(finalData[time], time);
}

// let interval = setInterval(step, 100);
    let interval;
    button.addEventListener("click", function(event) {
    // console.log(button.innerHTML === 'Play')

    if (button.innerHTML === "Play") {
        interval = setInterval(step, 150);
        // console.log("hit 1");
        button.innerHTML = "Pause";
    } else if (button.innerHTML === "Pause") {
        clearInterval(interval);
        // console.log("hit 2");
        button.innerHTML = "Play";
    }
    });

    let reset = document.getElementById("reset-button");

    reset.addEventListener("click", function(event) {
        time = 0
        clearInterval(interval);
        update(finalData[0], time);
        button.innerHTML = 'Play'
    });
}

