import "./styles/main.css";

const timerElm = document.getElementById("timer");

let intervalId;
let count = 900;

const setTimer = function (count) {
  let minutes = Math.trunc(count / 60);
  let seconds = count % 60;
  timerElm.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const countdown = function () {
  count--;
  setTimer(count);
};

const startCountdown = function () {
  if (!intervalId) {
    intervalId = setInterval(countdown, 1000);
  }
};
setTimer(count);
startCountdown();
