const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');
let counterValue = 0;
incrementBtn.addEventListener('click', () => {
    valueSpan.textContent = counterValue += 1;
});

decrementBtn.addEventListener('click', () => {
    valueSpan.textContent = counterValue -= 1;
})