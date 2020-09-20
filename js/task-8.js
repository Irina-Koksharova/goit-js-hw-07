const formEl = document.querySelector('#controls');
const inputEl = formEl.children[0];
const renderEl = formEl.children[1];
const destroyEl = formEl.children[2];
const collectionEl = document.querySelector('#boxes');

let boxes;

function onFormInput(event) {
  let array = [];
  array.length = event.currentTarget.value;
  const makeBoxes = items => {
    return [...items].map(item => {
      const itemEl = document.createElement('div');
      itemEl.classList = 'boxes-item';
      itemEl.style =
        'background-color: ' +
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
      return itemEl;
    });
  };
  boxes = makeBoxes(array);
  return boxes;
}
inputEl.addEventListener('input', onFormInput);

function createBoxes(event) {
  collectionEl.append(...boxes);
}
renderEl.addEventListener('click', createBoxes);

function destroyBoxes(event) {
  inputEl.value = '';
  collectionEl.remove(...boxes);
}
destroyEl.addEventListener('click', destroyBoxes);
