// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка "Anonymous"

{/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}
const input = document.querySelector('#name-input');
console.log(input);
const span = document.querySelector('#name-output');
console.log(span);

input.addEventListener('input', inputChangeValue);


function inputChangeValue(event) {
    if (event.currentTarget.value === '') {
        span.textContent = 'Anonymous'
    } else {
        span.textContent = event.currentTarget.value;
    }
};