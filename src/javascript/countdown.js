let date = new Date("2017-01-26");
let statusElement = document.querySelector('.status');
let timerElement = document.querySelector('.timer span');

function countDown() {
    statusElement.style.display = 'inherit';
    let time = timerElement.textContent;
    let min = parseInt(time.split(':')[0], 10)
    let sec = parseInt(time.split(':')[1], 10)
    date.setMinutes(min, sec);
    date.setSeconds(date.getSeconds() - 1);
    time = makeTimeFormat(date.getMinutes()) + ':' + makeTimeFormat(date.getSeconds());
    timerElement.textContent = time;
}

function makeTimeFormat(time) {
    if (time < 10) {
        return '0' + time; 
    }
    else {
        return time;
    }
}

export default countDown ;