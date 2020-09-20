const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? inputEl.classList.add('valid')
    : inputEl.classList.add('invalid');
});

inputEl.addEventListener('focus', event => {
  event.currentTarget.classList.remove('valid', 'invalid');
  event.currentTarget.value = '';
});
