const days = document.getElementById("days");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const miriSeconds = document.getElementById("mirisec");
countdown();
setInterval(countdown, 1000);



function countdown() {
  const now = new Date();
  const end = new Date("2023/09/17 00:00:00");
  const diff = end - now;
  const diffSec = Math.floor(diff / 1000);

  const dateSec = 60 * 60 * 24;
  const hourSec = 60 * 60;
  const minSec = 60;

  const Days = Math.floor(diffSec / dateSec) + 1;
  const Hours = Math.floor(diffSec / hourSec % 24);
  const Minutes = Math.floor(diffSec / minSec % 60);
  const Seconds = Math.floor(diffSec % 60);
  const miriSeconds = Math.floor(diffSec % 60);

  days.innerHTML = Days < 10 ? '0' + Days : Days;
  hour.innerHTML = Hours < 10 ? '0' + Hours : Hours;
  min.innerHTML = Minutes < 10 ? '0' + Minutes : Minutes;
  sec.innerHTML = Seconds < 10 ? '0' + Seconds : Seconds;
  miriSeconds.innerHTML = miriSeconds ;//< 10 ? '0' + miriSeconds :miriSeconds;
}