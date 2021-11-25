// Напиши скрипт, который для каждого элемента
// массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй
// метод document.createElement().
// Добавит название ингредиента как
// его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию
// в список ul.ingredients.

const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];


const list = document.querySelector('#ingredients');



function create(ingredients, callback) {
    ingredients.forEach((ingredient) => {
        let elemEl1 = document.createElement('li');
        elemEl1.textContent = ingredient;
        elemEl1.classList.add('item');
        callback(elemEl1);
        return elemEl1;
        });
}

 create([
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
], add);

function add(elemEl1) {
    list.append(elemEl1);
};
 console.log(list);