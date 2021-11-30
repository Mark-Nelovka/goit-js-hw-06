// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий
// в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов
// в категории(всех вложенных в него < li >).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length); // Number of categories: 3

const item = document.querySelectorAll('.item');

item.forEach((e) => console.log('Category:', e.firstElementChild.textContent, 'Elements:', e.lastElementChild.children.length));