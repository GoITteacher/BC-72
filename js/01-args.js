//===========================================

// function myFun(a, b) {
//   const sum = a + b;
//   return sum;
// }

// const x1 = myFun(10, 20);
// const x2 = myFun(10, 20, 10);
// const x3 = myFun();

// function myFun(a, b) {
//   if (a === 0 || b === 0) {
//     return null;
//   }
//   const sum = a + b;
//   return sum;
// }

// const x1 = myFun(10, 0);
// console.log(x1);

//===========================================
/**
 * Псевдомасив arguments и Array.from
 */

// function fn() {
//   console.log(arguments);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// ============

// const arr = [];
// arr.push(1, 2, 3, 4);
// console.log(arr);

// const min = Math.min(4, 1, 3, 5, 5, 3, 8, 5, 2);
// console.log(min);

// =================================

// Number();
// String();
// Boolean();

// function foo() {
//   const args = Array.from(arguments);
// }

// foo(1, 2, 3, 4, 5);

// ==================================

/**
 * Напиши функцію add для складання довільної
 * кількості аргументів (чисел)
 */

// function add() {
//   const args = Array.from(arguments);
//   let total = 0;
//   for (const value of args) {
//     total += value;
//   }
//   return total;
// }

// console.log(add(1, 2));

/**
 * Напиши функцію calAverage() яка приймає довільну кількість
 * аргументів і повертає їхнє середнє значення. Усі аргументи
 * будуть лише числами.
 */

// function calAverage() {
//   const args = Array.from(arguments);
//   let total = 0;
//   for (const item of args) {
//     total += item;
//   }
//   return total / args.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
// ===================================================

/* 
Напишіть функцію яка приймає першим параметром масив, а все інше - це довільна кількість аргументів.
Фукнція повинна повернути масив 

*/

// function task1() {
//   const args = Array.from(arguments);
//   const arr = args.shift();
//   const result = [];
//   for (const elem of args) {
//     if (arr.includes(elem)) {
//       result.push(elem);
//     }
//   }
//   return result;
// }

// console.log(task1([1, 2, 3], 5, 1, 3, 6));

// ==================================

// function sum(a = 1, b = 1) {
//   return a + b;
// }

// console.log(sum(10, 5));
// console.log(sum(10));
// console.log(sum());

// function sayHello(username = 'Anonym') {
//   console.log(`Hello ${username}!`);
// }

// sayHello();
// sayHello('Vasya');

// ===================================
