const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownContainer = document.querySelector('.countdown-container')

const arrival = 'November 4, 2021 14:20:00';

function countdown() {
    const arrivalDate = new Date(arrival);
    const currentDate = new Date();

    if (currentDate < arrivalDate) {

        const totalSeconds = (arrivalDate - currentDate) / 1000

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    } else {
        celebrate()
    }

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

function celebrate() {
    return countdownContainer.innerHTML = `<h1>I LOVE YOU</h1>`
}

// Initial call
countdown();

setInterval(countdown, 1000);