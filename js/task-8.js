// const formEl = document.querySelector('#controls');
// const inputEl = formEl.children[0];
// const renderEl = formEl.children[1];
// const destroyEl = formEl.children[2];
// const collectionEl = document.querySelector('#boxes');

// let boxes;
// let width = 20;
// let height = 20;

// function makeRandomNumber(max, min) {
//   const random = Math.random() * (max - min) + min;
//   const number = Math.round(random).toString();
//   return number;
// }

// function makeDinamicWidth(value) {
//   return (width += value);
// }

// function makeDinamicHeight(value) {
//   return (height += value);
// }

// function onFormElInput(amount) {
//   let list = [];
//   list.length = amount.currentTarget.value;

//   const makeBoxes = elements => {
//     return [...elements].map(element => {
//       const item = document.createElement('div');

//       item.classList = 'boxes-item';
//       item.style.backgroundColor = `rgb(${makeRandomNumber(
//         255,
//         0,
//       )}, ${makeRandomNumber(255, 0)}, ${makeRandomNumber(255, 0)})`;
//       item.style.width = `${makeDinamicWidth(10)}px`;
//       item.style.height = `${makeDinamicHeight(10)}px`;

//       return item;
//     });
//   };

//   return (boxes = makeBoxes(list));
// }

// inputEl.addEventListener('input', onFormElInput);

// function createBoxes() {
//   collectionEl.append(...boxes);
// }

// renderEl.addEventListener('click', createBoxes);

// function destroyBoxes() {
//   inputEl.value = '';
//   collectionEl.remove(...boxes);
//   document.location.reload();
// }

// destroyEl.addEventListener('click', destroyBoxes);

const formEl = document.querySelector('#controls');
const inputEl = document.querySelector('.input-js');
const renderEl = document.querySelector('.render-js');
const destroyEl = document.querySelector('.destroy-js');
const collectionEl = document.querySelector('#boxes');

let boxes;
let width = 20;
let height = 20;
let list = [];

function makeRandomNumber(max, min) {
  const random = Math.random() * (max - min) + min;
  const number = Math.round(random).toString();
  return number;
}

function makeDinamicWidth(value) {
  width += value;
  return width;
}

function makeDinamicHeight(value) {
  height += value;
  return height;
}

function createBoxes(amount) {
  amount = inputEl.value;
  list.length = amount;

  const makeBoxes = elements => {
    return [...elements].map(element => {
      const item = document.createElement('div');

      item.classList = 'boxes-item';
      item.style.backgroundColor = `rgb(${makeRandomNumber(
        255,
        0,
      )}, ${makeRandomNumber(255, 0)}, ${makeRandomNumber(255, 0)})`;
      item.style.width = `${makeDinamicWidth(10)}px`;
      item.style.height = `${makeDinamicHeight(10)}px`;

      return item;
    });
  };

  boxes = makeBoxes(list);
  collectionEl.append(...boxes);
}
renderEl.addEventListener('click', createBoxes);

function destroyBoxes(event) {
  inputEl.value = '';
  collectionEl.remove(...boxes);
}
destroyEl.addEventListener('click', destroyBoxes);
