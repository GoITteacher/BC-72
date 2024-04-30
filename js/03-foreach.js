/**
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

//!===============================================================
// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// numbers.forEach(el => {
//   total += el;
// });

// console.log(total);

/* 
console.log(5, 0, numbers)
console.log(10, 1, numbers)
console.log(15, 2, numbers)
console.log(20, 3, numbers)
console.log(25, 4, numbers)
*/

// numbers.forEach(console.log);

//!===============================================================

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
// function logItems(items) {
//   items.forEach((el, i) => {
//     console.log(`${i + 1} - ${el}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */
/* function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');

  nameList.forEach((el, i, arr) => {
    console.log(`${el}: ${phoneList[i]}`);
  });
}

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
}); */

/**
 * Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
 */

// function calculateAverage(...args) {
//   let total = 0;

//   args.forEach(item => {
//     total += item;
//   });

//   return total / args.length;
// }

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2

// function getArray(arr) {
//   arr.forEach((el, i) => {
//     arr[i] = el * i;
//   });
//   return arr;
// }

// console.log(getArray([1, 2, 3, 4, 5, 6]));
