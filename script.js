let startTime, newTime, difference;
let timerInterval;
let running = false;

function toggleStopwatch() {
    if (!running) {
        startStopwatch();
    } 
    else {
        stopStopwatch();
    }
}

function startStopwatch() {
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(updateTime, 1000);
    document.getElementById("startStopStopwatch").textContent = "Stop";
    running = true;
}

function stopStopwatch() {
    clearInterval(timerInterval);
    difference = new Date().getTime() - startTime;
    document.getElementById("startStopStopwatch").textContent = "Start";
    running = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    document.getElementById('stopwatchDisplay').textContent = '00:00:00';
    startTime = 0;
    newTime = 0;
    difference = 0;
    running = false;
    document.getElementById("startStopStopwatch").textContent = "Start";
}

function updateTime() {
    newTime = new Date().getTime();
    difference = newTime - startTime;

    let totalSeconds = Math.floor(difference / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    document.getElementById('stopwatchDisplay').textContent = hours + ':' + minutes + ':' + seconds;
}

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        toggleStopwatch();
    }
    if (event.code === 'KeyR') {
        resetStopwatch();
    }
});