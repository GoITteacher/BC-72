/**
 * Напиши цикл for, який виводить у консоль браузера
 * числа за зростанням від a до b, але тільки якщо число кратне 5.
 */
/* 
const min = 10;
const max = 100;

// debugger;
for (let i = min; i <= max; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
  }
} */

/*
 * Напиши скрипт, який підраховує суму всіх парних чисел,
 * які входять в діапазон чисел у змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
 */

// const min = 10;
// const max = 20;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     total += i;
//   }
// }

// console.log(total);

// =====================================

// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"

// const message = 'Hello world';

// for (let i = 1; i < message.length; i += 2) {
//   console.log(message[i]);
// }

// for (let i = 0; i < message.length; i += 2) {
//   console.log(message[i]);
// }

/* function showMessage(message) {
  for (let i = 0; i < message.length; i += 2) {
    console.log(message[i]);
  }
}

showMessage('Hello world');
showMessage('Test'); */

// =====================================

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//    порядку.

// function showReverseMessage(message) {
//   for (let i = message.length - 1; i >= 0; i--) {
//     console.log(message[i]);
//   }
// }

// showReverseMessage('world');
// =====================================

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//    пробіл.

// function showMessage(message) {
//   for (let i = 0; i < message.length; i++) {
//     if (message[i] === ' ') {
//       break;
//     }
//     console.log(message[i]);
//   }
// }

// showMessage('Hello world');
// =====================================

// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок.

// function getReverseString(msg) {
//   let result = '';

//   for (let i = msg.length - 1; i >= 0; i -= 1) {
//     console.log(`'${result}' += '${msg[i]}'`);
//     result += msg[i];
//   }

//   const firstLetter = result[0].toUpperCase();
//   return firstLetter + result.slice(1).toLowerCase();
// }

// console.log(getReverseString('World'));

// =====================================

// 1. Напиши функцію, яка приймає рядок та повертає де кожен
//    другий символ у верхньому регістрі

// function getString(message) {

//   let result = '';

//   for (let i = 0; i < message.length; i++) {
//     if (i % 2 === 0) {
//       result += message[i].toUpperCase();
//     } else {
//       result += message[i].toLowerCase();
//     }
//   }
//   console.log(result);
// }

// getString('Hello World Test String');

// 1. Напиши цикл, який виведе на консоль числа від 1 до 10.
// 1. Напиши цикл, який виведе на консоль парні числа від 1 до 20.
// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".
