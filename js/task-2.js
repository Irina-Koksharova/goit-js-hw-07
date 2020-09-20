const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('#ingredients');

const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  });
};

const ingredientsList = makeIngredientsList(ingredients);
listEl.append(...ingredientsList);
