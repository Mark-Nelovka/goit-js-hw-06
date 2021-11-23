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

// const categories = document.querySelectorAll('.item');
// console.log('Number of categories:', categories.length); // Number of categories: 3

// const titleCategoryOne = document.querySelectorAll('h2');
// console.log('Category :', titleCategoryOne[0].textContent);

// const parents = document.querySelectorAll('ul');

// const childParentsOne = parents[1].querySelectorAll('li');
// console.log('Elements:', childParentsOne.length);

// const titleCategorySecond = document.querySelectorAll('h2');
// console.log('Category :', titleCategorySecond[1].textContent);

// const childParentsSecond = parents[2].querySelectorAll('li');
// console.log('Elements:', childParentsSecond.length);

// const titleCategoryThird = document.querySelectorAll('h2');
// console.log('Category :', titleCategoryThird[2].textContent);

// const childParentsThird = parents[3].querySelectorAll('li');
// console.log('Elements:', childParentsThird.length);