function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Создай функцию createBoxes(amount), которая принимает
// один параметр - число.Функция создает столько < div >,
//   сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше
// предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате
// HEX.Используй готовую функцию getRandomHexColor для получения
// цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое
// div#boxes, тем самым удаляя все созданные элементы.

const input = document.querySelector('div > input');
const BtnCreate = document.querySelector('[data-create]');
const BtnDestroy = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');


let qwe;
BtnCreate.addEventListener('click', createBoxes)
BtnDestroy.addEventListener('click', destroyBoxes)

function createBoxes(number) {
  number = input.value;
  let counter = 0;
  for (let i = 1; i < number; i += 1) {
    counter += 10;
    if (i < 2) {
      const div = document.createElement('div');
    div.style.width = 30 + 'px';
      div.style.height = 30 + 'px';
      div.style.backgroundColor = getRandomHexColor();
      box.append(div);
    }
    const div = document.createElement('div');
      div.style.width = 30 + Number(`${counter}`) +'px';
      div.style.height = 30 + Number(`${counter}`) + 'px';
      div.style.backgroundColor = getRandomHexColor();
   
    box.append(div);
  }
}

function destroyBoxes() {
  box.innerHTML = '';
  input.value = '';
}




