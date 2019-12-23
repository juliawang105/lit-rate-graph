import { update } from './update';
import { finalData } from './literacy';

let time = 0;
export const button = () => {
let button = document.getElementById("play-button");


function step() {
  time = time < 15 ? time + 1 : 0;
  output.innerHTML = time + 2000;
  rangeslider.value = time + 2000;
  update(finalData[time], time);
}

    let interval;
    button.addEventListener("click", function(event) {

    if (button.innerHTML === "Play") {
        interval = setInterval(step, 200);
        button.innerHTML = "Pause";
    } else if (button.innerHTML === "Pause") {
        clearInterval(interval);
        button.innerHTML = "Play";
    }
    });

    let restart = document.getElementById("reset-button");
    let rangeslider = document.getElementById("sliderRange");
    let output = document.getElementById("demo");
    output.innerHTML = rangeslider.value;

    restart.addEventListener("click", function(event) {
        time = 0
        clearInterval(interval);
        update(finalData[0], time);
        button.innerHTML = 'Play';
        output.innerHTML = 2000;
        rangeslider.value = 2000;
      
    });
}


let select = document.getElementById("continent-select");

export const selectRegion = () => {
select.addEventListener("change", function() {
  update(finalData[time], time);
});
}

export const selectColor = (arr) => {
    let region = select.value; 
    arr = arr.filter( d => {
         if(region === 'all'){
             return true; 
         } else {
             return d.region === region;
         }
     });   
     return arr;
};



   let rangeslider = document.getElementById("sliderRange");
   let output = document.getElementById("demo");
   output.innerHTML = rangeslider.value;
   let year;

   export const slider = arr => {
     rangeslider.addEventListener('input', function(event){
         year = event.target.value - 2000;
         output.innerHTML = event.target.value;
         update(finalData[year], year)
     })
   };