function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerColor;

startBtn.addEventListener('click', changeColor);

stopBtn.addEventListener('click', stopChangingColor);
stopBtn.disabled = true;

function changeColor() {
  timerColor = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
  startBtn.removeEventListener('click', changeColor);
  stopBtn.disabled = false;
  startBtn.disabled = true;
}

function stopChangingColor() {
  clearInterval(timerColor);
  startBtn.addEventListener('click', changeColor);
  startBtn.disabled = false;
}
