import trackTime from './trackTime.js';
import {inputToTimer} from './filters.js';

const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const stopBtn = document.querySelector('.stop-btn');
let statusElement = document.querySelector('.status');
let workTimeElement = document.querySelector('.work_time input');

function startTimer(status, button) {
    if (button == startBtn) {
        document.querySelectorAll('input').forEach(function(field) {
            field.disabled = true;
        })
        makeActiveBtn(startBtn);
        stopBtn.disabled = false;
        pauseBtn.disabled = false;
        trackTime(status, button);
        activeTimerStyle();
    }
    if (button == pauseBtn) {
        makeActiveBtn(pauseBtn);
        makeUnactiveBtn(startBtn);
        NonActiveTimerStyle();
    }
    if (button == stopBtn) {
        makeUnactiveBtn(startBtn);
        makeUnactiveBtn(pauseBtn);
        stopBtn.disabled = true;
        pauseBtn.disabled = true;
        NonActiveTimerStyle();
        document.querySelectorAll('input').forEach(function(field) {
            field.disabled = false;
        });
        statusElement.style.display = '';
        inputToTimer(workTimeElement.value);
    }
}


function makeUnactiveBtn(button) {
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        button.classList.add('btn');
    }
    // button.disabled = true;
}

function makeActiveBtn(button) {
    if (!(button.classList.contains('active'))) {
        button.classList.remove('btn')
        button.classList.add('active');
    }
    // button.disabled = false;
}

function activeTimerStyle(){
  document.querySelector('.timer img').className += "timer_active";
}

function NonActiveTimerStyle(){
  document.querySelector('.timer img').classList.remove("timer_active");
}

export default startTimer;