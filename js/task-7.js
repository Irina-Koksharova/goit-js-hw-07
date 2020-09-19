const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = '30px';

const inputDefaultValue = inputEl.value;
const textFontSizeDefaultValue = Number.parseInt(textEl.style.fontSize);

function onInputChange(event) {
  let value;
  let newTextFontSizeValue;
  if (event.currentTarget.value !== inputDefaultValue) {
    value = (event.currentTarget.value - inputDefaultValue) / 3;
    newTextFontSizeValue = textFontSizeDefaultValue + value + 'px';
    textEl.style.fontSize = newTextFontSizeValue;
  }
}

inputEl.addEventListener('input', onInputChange);
