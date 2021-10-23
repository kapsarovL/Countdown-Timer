const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const summerComing = "21 jun 2022";

function countdown() {
    const summerComingDate = new Date(summerComing);
    const currentDate = new Date();

    const totalSeconds = (summerComingDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(days, hours, mins, seconds);
}

function formatTime(time) {
    return time < 10? (`0${time}`) : time;
}


countdown();

setInterval(countdown, 1000);