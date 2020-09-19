const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

const defaultNameEl = outputNameEl.textContent;

function onInputNameInput(event) {
  outputNameEl.textContent = event.currentTarget.value;
}

function onInputNameBlur(event) {
  event.currentTarget.value !== ''
    ? (outputNameEl.textContent = event.currentTarget.value)
    : (outputNameEl.textContent = defaultNameEl);
}

inputNameEl.addEventListener('input', onInputNameInput);
inputNameEl.addEventListener('blur', onInputNameBlur);
