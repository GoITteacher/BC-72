/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */
//!===============================================================
// const numbers = [5, 1, 1, 32, 6, 8, 2, 1, 2];

// const result = numbers.toSorted((b, a) => {
//   return a - b; -4
// });

// console.log(result);

//!===============================================================
// const numbers = [1, 9, 6, 2, 3];

// const sorted = numbers.toSorted((a, b) => a - b);
// console.log('sorted ', sorted);

// const letters = ['B', 'a', 'b', 'A'];
// const sorted = letters.toSorted((a, b) => {
//   return a.localeCompare(b);
// });
// console.log('letters', sorted);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   }),
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('ascSortedNumbers', ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// За ігровим часом
// const sortedByBestPlayers = players;
// console.table(sortedByBestPlayers);

// const sortedByWorstPlayers = players;
// console.table(sortedByWorstPlayers);

// // По первой букве имени
// const byName = players;
// console.table(byName);

//!===============================================================

// console.log(cars);

// const sorted = cars.toSorted((b, a) => {
//   return a.color.localeCompare(b.color);
// });

// console.table(sorted);

//!===============================================================

// const sorted = cars.toSorted((b, a) => {
//   return a.color.localeCompare(b.color);
// });

// const sorted = cars.toSorted((b, a) => {
//   return a.price - b.price;
// });

// const sorted = cars.toSorted((b, a) => {
//   return a.isSportCar - b.isSportCar;
// });

// const sorted = cars.toSorted((a, b) => {
//   return a.amount - b.amount;
// });

// let count = 0;
// const sorted = cars.toSorted((a, b) => {
//   count++;
//   if (a.isSportCar === b.isSportCar) {
//     if (a.color === b.color) {
//       return a.color.localeCompare(b.color);
//     } else {
//       return a.model.localeCompare(b.model);

//     }
//   }
//   return a.isSportCar - b.isSportCar;
// });

// const sorted = cars
//   .toSorted((a, b) => {
//     return a.color.localeCompare(b.color);
//   })
//   .toSorted((a, b) => {
//     return a.model.localeCompare(b.model);
//   })
//   .toSorted((a, b) => {
//     return a.isSportCar - b.isSportCar;
//   });

// console.log(count);
// console.table(sorted);
