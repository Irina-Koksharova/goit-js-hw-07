const categoriesListEl = document.querySelectorAll('.item');

const getNumberOfCategories = categories => {
  console.log(`В списке ${categories.length} категории.`);
};

getNumberOfCategories(categoriesListEl);

const getCategories = categories => {
  categories.forEach(category => {
    console.log(
      `Категория: ${category.firstElementChild.textContent}\nКоличество элементов: ${category.lastElementChild.childElementCount}`,
    );
  });
};

getCategories(categoriesListEl);
