import startTimer from './src/javascript/timer.js';
import {inputToTimer, setInputFilter} from './src/javascript/filters.js';

const startBtn = document.querySelector('.start-btn');

let status = 0; // 0 - work, 1 - rest

document.addEventListener("click", function(event) {
    if(event.target.classList.contains('btn')) {
        startTimer(status, event.target);
    }
});

setInputFilter(document.querySelectorAll(".inputs input"), function(value) {
  return /^[0-9]{0,2}$/.test(value); // Allow digits only, using a RegExp
});

document.querySelector(".work_time input").addEventListener('change', function(event) {
  inputToTimer(event.target.value);
});


