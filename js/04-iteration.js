/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

// ! =================================================
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// let totalFeedback = 0;

// for (const key in feedback) {
//   totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

// ! =================================================

// const objA = {
//   x: 10,
//   y: 20,
//   t: 30,
// };

// const objB = {
//   x1: 10,
//   y1: 20,
//   t1: 30,
//   __proto__: objA,
// };

// for (const key in objB) {
//   console.log(key);
// }

// ! =================================================

// const objB = {
//   x1: 10,
//   _y1: 20,
//   t1: 30,
//   x2: 10,
//   y2: 20,
//   _t2: 30,
// };

/* for (const value of Object.values(objB)) {
  console.log(value);
} */

/* for (const key of Object.keys(objB)) {
  if (key.startsWith('_')) {
    console.log(key, objB[key]);
  }
} */

/* for (const key of Object.keys(objB)) {
  objB[key] += 1;
} */

// console.log(objB);

// ! =================================================
/* 
const testObj = {
  x1: 10,
  x2: 20,
  x3: 15,
  x4: 10,
  x5: 20,
  x6: 15,
};

const values = Object.values(testObj);
let avg = 0;

for (const value of values) {
  avg += value;
}

avg /= values.length;

console.log(avg); */
// ! =================================================

// const testObj = {
//   x1: { name: 'x1' },
//   x2: { name: 'x2' },
//   x3: { name: 'x3' },
// };

// const values = Object.values(testObj);

// for (const obj of values) {
//   console.log(obj);
// }

// ! =================================================
