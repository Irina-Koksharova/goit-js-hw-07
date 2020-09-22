const counterEl = document.querySelector('#value');
const buttonDecrementEl = document.querySelector(
  'button[data-action=decrement]',
);
const buttonIncrementEl = document.querySelector(
  'button[data-action=increment]',
);

let counterValue = Number(counterEl.textContent);

function onBtnDecrementClick(event) {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}

function onBtnIncrementClick(event) {
  counterValue += 1;
  counterEl.textContent = counterValue;
}

buttonDecrementEl.addEventListener('click', onBtnDecrementClick);

buttonIncrementEl.addEventListener('click', onBtnIncrementClick);
