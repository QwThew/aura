function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        display.querySelector('.hours').textContent = String(hours).padStart(2, '0');
        display.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
        display.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    const duration = 1 * 3600 + 48 * 60 + 47;
    const display = document.querySelector('.timer-container');
    startTimer(duration, display);
};