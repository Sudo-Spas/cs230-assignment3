/**
 * @author Andreea-Daniela Borodi
 */

let timeLeft = 60;
let timer = null;
let paused = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return mins + ":" + secs.toString().padStart(2, "0");
}

timerDisplay.textContent = formatTime(timeLeft);

function start() {

    timer = setInterval(function () {

        if (!paused) {

            timeLeft--;
            timerDisplay.textContent = formatTime(timeLeft);

            if (timeLeft < 15) {
                timerDisplay.classList.add("warning");
            }

            if (timeLeft <= 0) {
                clearInterval(timer);
                alert("Timer is over. Take a break!");
            }

        }

    }, 1000);

    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
}

function pause() {

    if (paused === false) {
        paused = true;
        pauseBtn.textContent = "Resume timer";
    } else {
        paused = false;
        pauseBtn.textContent = "Pause timer";
    }

}

function stop() {

    clearInterval(timer);

    timeLeft = 60;
    timerDisplay.textContent = formatTime(timeLeft);

    timerDisplay.classList.remove("warning");

    paused = false;
    pauseBtn.textContent = "Pause";

    startBtn.disabled = false;
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
}