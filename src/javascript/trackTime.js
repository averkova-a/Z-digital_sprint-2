import  countDown  from './countdown.js';
import { inputToTimer } from './filters.js';

let timerElement = document.querySelector('.timer span');
let workTimeElement = document.querySelector('.work_time input');
let breakTimeElement = document.querySelector('.break_time input');
let statusElement = document.querySelector('.status');

let audio = document.querySelector('audio');

function trackTime(status) {

    document.addEventListener("click", function(event) {
        if(event.target.classList.contains('stop-btn') || event.target.classList.contains('pause-btn')) {
            status = -1;
        }
    });

    if (status == 0) {

        countDown();
        if (timerElement.textContent !== "00:00") {
            setTimeout(() => trackTime(status), 1000);
        }
        else {
            status = 1;
            audio.play();
            statusElement.textContent = 'Rest';
            inputToTimer(breakTimeElement.value);
        }
    }

    if (status == 1) {

        countDown();
        if (timerElement.textContent !== "00:00") {
            setTimeout(() => trackTime(status), 1000);
        }
        else {
            status = 0;
            audio.play();
            statusElement.textContent = 'Work';
            timerElement.textContent = workTimeElement.value + ':00';
            trackTime(status);
        }
    }
}

export default trackTime;