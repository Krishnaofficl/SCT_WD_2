let startTime, elapsed = 0, interval;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

function formatTime(ms) {
  let date = new Date(ms);
  return date.toISOString().substr(11, 12);
}

function updateDisplay() {
  display.textContent = formatTime(elapsed + (Date.now() - startTime));
}

document.getElementById('start').onclick = () => {
  if (!interval) {
    startTime = Date.now();
    interval = setInterval(updateDisplay, 10);
  }
};

document.getElementById('pause').onclick = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    elapsed += Date.now() - startTime;
  }
};

document.getElementById('reset').onclick = () => {
  clearInterval(interval);
  interval = null;
  elapsed = 0;
  display.textContent = '00:00:00.000';
  laps.innerHTML = '';
};

document.getElementById('lap').onclick = () => {
  if (interval) {
    const li = document.createElement('li');
    li.textContent = formatTime(elapsed + (Date.now() - startTime));
    laps.appendChild(li);
  }
};
