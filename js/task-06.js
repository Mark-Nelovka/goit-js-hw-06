// Напиши скрипт, который при потере фокуса на инпуте
//     (событие blur), проверяет его содержимое на
// правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается
// в его атрибуте data - length.
// Если введено подходящее количество символов, то
// border инпута становится зелёным, если неправильное - красным.
const inputValue = document.querySelector('#validation-input');
inputValue.addEventListener('blur', onEventChangeInput);

function onEventChangeInput(event) {
    let result = event.currentTarget.value.length === 6 ? inputValue.classList.add('valid') : inputValue.classList.add('invalid');
    return result;
}