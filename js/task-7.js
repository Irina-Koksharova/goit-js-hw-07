const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '30px';

const inputDefaultValue = Number(inputEl.value);
const textDefaultValue = Number.parseInt(
  document.getElementById('text').style.fontSize,
);

function onInputChange(event) {
  let value;
  let newTextFontSize;
  if (Number(event.currentTarget.value) !== inputDefaultValue) {
    value = (Number(event.currentTarget.value) - inputDefaultValue) / 3;
    newTextFontSize = textDefaultValue + value + 'px';
    textEl.style.fontSize = newTextFontSize;
  }
}

inputEl.addEventListener('input', onInputChange);
