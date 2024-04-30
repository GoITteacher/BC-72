/**
 * Стрілочні функції
 * - Оголошення +
 * - Явне і неявне поверненя +
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */
//!===============================================================

/* const test = (x1, x2, x3) => {
  return x1 + x2 + x3;
};
console.log(test(10, 20, 30));
 */

// const arrow1 = (x, y) => x + y;
// console.log(arrow1(10, 20));

// const arrow2 = str => (str + str).toUpperCase().slice(1, -1);
// console.log(arrow2('Hello'));

// const arrow3 = (str1, str2) => str1.toLowerCase() + str2.toUpperCase();
// console.log(arrow3('Hello', 'World'));

// const len = str => str.length;
// console.log(len('world'));

//!===============================================================

// const arrow = (...args) => {
//   console.log(args);
// };

// arrow(1, 2, 3, 4, 6, 61);

//!===============================================================

// function add(a, b, c) {
//   return a + b + c;
// }

// const addArrow = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

//!===============================================================

// function fnA() {
//   return {
//     a: 5,
//   };
// }

// const arrowFnA = (x1, x2) => {
//   return {
//     a: x1,
//     b: x2,
//   };
// };

// const arrowFnB = (x1, x2) => ({
//   a: x1,
//   b: x2,
// });

//!===============================================================

/**
 * Функція calc(a, b, callback)
 */

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calc(2, 3, (x, y) => x + y);
// calc(10, 8, (x, y) => x - y);
