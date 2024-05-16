/*
 * Метод window.setTimeout(callback, delay, args)
 */
//!===============================================================
// console.log('До виклику setTimeout');

// function sayHello() {
//   console.log('Hello');
// }

// setTimeout(sayHello, 1000);

// console.log('Після виклику setTimeout');

//!===============================================================

// setTimeout(() => {
//   console.log('Hello1');
// }, 1000);

// setTimeout(() => {
//   console.log('Hello2');
// }, 5000);

// setTimeout(() => {
//   console.log('Hello3');
// }, 2000);

//!===============================================================

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */
/* const x = setTimeout(() => {
  console.log('1');
}, 1000);

const y = setTimeout(() => {
  console.log(2);
}, 3000);

const t = setTimeout(() => {
  console.log(5);
}, 5000);

clearTimeout(y); */

/**
 * Можливість передати параметри для колбеку
 */

// const callback = (i, x, y) => {
//   console.log('Hello', i, x, y);
// };

// for (let i = 1; i <= 5; i++) {
//   console.log('Start', i);
//   setTimeout(callback, i * 1000, i, 10, 20);
// }
