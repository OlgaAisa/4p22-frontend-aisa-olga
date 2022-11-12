'use strict'

let firstArgument = document.querySelector('.calculator__input1');
let secondArgument = document.querySelector('.calculator__input3');
const operator = document.querySelector('.calculator__input2');
let calculator__result = document.querySelector('.calculator__result');
const btn = document.querySelector('.calculator__button');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const num1_str = String(firstArgument.value);
    const num2_str = String(secondArgument.value);
    if ((num1_str.length === 0) || (num1_str.indexOf(' ') != -1)) {
        calculator__result.innerHTML = 'Вы не ввели первое число или добавили пробел в поле ввода';
        return console.log('Вы не ввели первое число или добавили пробел в поле ввода');
    }
    if ((num2_str.length === 0) || (num2_str.indexOf(' ') != -1)) {
        calculator__result.innerHTML = 'Вы не ввели первое число или добавили пробел в поле ввода';
        return console.log('Вы не ввели первое число или добавили пробел в поле ввода');
    }
    const num1 = Number(firstArgument.value);
    const num2 = Number(secondArgument.value);
    let res;

    if ( num1 === '' && num1 !== 0) {
        calculator__result.innerHTML = 'Первое число не указано';
        return console.log('Первое число не указано');
    }

    if (num2 === '' && num2 !== 0) {
        calculator__result.innerHTML = 'Второе число не указано';
        return console.log('Второе число не указано');
    }

    if (isNaN(num1) === true || isNaN(num2) === true) {
        calculator__result.innerHTML = 'Некорректный ввод чисел';
        return console.log('Некорректный ввод чисел');
    }

    console.log(num1, '.calculator__input1', secondArgument.value, num2, typeof num2);


if (typeof num1 === 'number' && typeof num2 === 'number') {
    switch (operator.value) {
        case "+":
            res = num1 + num2;
            console.log(res);
            calculator__result.innerHTML = res;
            break;
        case "-":
            res = num1 - num2;
            console.log(res);
            calculator__result.innerHTML = res;
            break;
        case "/":
            res = num1 / num2;
            console.log(res);
            calculator__result.innerHTML = res;
            break;
        case "*":
            res = num1 * num2;
            console.log(res);
            calculator__result.innerHTML = res;
            break;
        case '':
            console.log('Не введен знак');
            calculator__result.innerHTML = 'Не введен знак';
            break;
        default: return calculator__result.innerHTML = 'Программа не поддерживает такую операцию';
        console.log('Программа не поддерживает такую операцию');
    }
}
})
