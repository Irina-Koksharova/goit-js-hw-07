const formEl = document.querySelector('#controls');
const inputEl = formEl.children[0];
const renderEl = formEl.children[1];
const destroyEl = formEl.children[2];
const collectionEl = document.querySelector('#boxes');

function randomNumber(max, min) {
  const random = Math.random() * (max - min) + min;
  const number = Math.round(random).toString();
  return number;
}

function dinamicWidth(element, value) {
  return (width += value);
}

function dinamicHeight(element, value) {
  return (height += value);
}

let width = 20;
let height = 20;
let boxes;

function onFormElInput(amount) {
  let array = [];
  array.length = amount.currentTarget.value;

  const makeBoxes = items => {
    return [...items].map(item => {
      const itemEl = document.createElement('div');

      itemEl.classList = 'boxes-item';
      itemEl.style.backgroundColor = `rgb(${randomNumber(
        255,
        0,
      )}, ${randomNumber(255, 0)}, ${randomNumber(255, 0)})`;
      itemEl.style.width = `${dinamicWidth(item, 10)}px`;
      itemEl.style.height = `${dinamicHeight(item, 10)}px`;

      return itemEl;
    });
  };

  return (boxes = makeBoxes(array));
}

inputEl.addEventListener('input', onFormElInput);

function createBoxes(event) {
  collectionEl.append(...boxes);
}

renderEl.addEventListener('click', createBoxes);

function destroyBoxes(event) {
  inputEl.value = '';
  collectionEl.remove(...boxes);
  document.location.reload();
}

destroyEl.addEventListener('click', destroyBoxes);
