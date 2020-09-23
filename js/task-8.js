const refs = {
  formEl: document.querySelector('#controls'),
  inputEl: document.querySelector('.input-js'),
  renderEl: document.querySelector('.render-js'),
  destroyEl: document.querySelector('.destroy-js'),
  collectionEl: document.querySelector('#boxes'),
};

function makeRandomNumber(max, min) {
  const random = Math.random() * (max - min) + min;
  const number = Math.round(random).toString();
  return number;
}

function createBoxes(event) {
  let boxes;
  let width = 20;
  let height = 20;

  function makeDinamicWidth(value) {
    width += value;
    return width;
  }

  function makeDinamicHeight(value) {
    height += value;
    return height;
  }

  const makeBoxes = value => {
    let array = [];
    for (let i = 0; i < value; i += 1) {
      const item = document.createElement('div');
      item.classList = 'boxes-item';
      item.style.backgroundColor = `rgb(${makeRandomNumber(
        255,
        0,
      )}, ${makeRandomNumber(255, 0)}, ${makeRandomNumber(255, 0)})`;
      item.style.width = `${makeDinamicWidth(10)}px`;
      item.style.height = `${makeDinamicHeight(10)}px`;
      array.push(item);
    }
    return array;
  };

  boxes = makeBoxes(refs.inputEl.value);
  refs.collectionEl.append(...boxes);
}

refs.renderEl.addEventListener('click', createBoxes);

function destroyBoxes(event) {
  refs.collectionEl.innerHTML = '';
  refs.inputEl.value = '';
}

refs.destroyEl.addEventListener('click', destroyBoxes);
