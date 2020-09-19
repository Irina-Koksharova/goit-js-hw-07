const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

const defaultNameEl = outputNameEl.textContent;

function onInputNameInput(event) {
  event.currentTarget.value === ''
    ? (outputNameEl.textContent = defaultNameEl)
    : (outputNameEl.textContent = event.currentTarget.value);
}

inputNameEl.addEventListener('input', onInputNameInput);
