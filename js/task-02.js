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


const ul = document.querySelector('#ingredients');
const list = ingredients.map((name) => {
    let elemEl1 = document.createElement('li');
    elemEl1.textContent = name;
    elemEl1.classList.add('item');
    return elemEl1;
});

ul.append(...list);
console.log(ul);