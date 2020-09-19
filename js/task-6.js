const inputEl = document.querySelector('#validation-input');

function onInputBlur(event) {
  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
}

inputEl.addEventListener('focus', event => {
  event.currentTarget.classList.remove('valid', 'invalid');
  event.currentTarget.value = '';
});

inputEl.addEventListener('blur', onInputBlur);
