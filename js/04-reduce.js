/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [1, 2, 4, 5, 1, 3, 6, 2, 2, 4, 6, 7, 2, 1];

// const total = numbers.reduce((acc, el, idx, arr) => {
//   acc += el;
//   return acc;
// }, 0);
// console.log(total);

// const filteredNumbers = numbers.reduce((acc, el, idx, arr) => {
//   if (el % 2 === 0) {
//     acc.push(el);
//   }
//   return acc;
// }, []);

// console.log(filteredNumbers);
/**
 * Рахуємо загальну зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce((acc, el) => acc + el, 0);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// const totalTimePlayed = players.reduce((acc, player, id) => {
//   return acc + player.timePlayed;
// }, 0);
// console.log(totalTimePlayed);

/**
 * Рахуємо загальну суму товарів кошика
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((acc, product) => {
  return acc + product.price * product.quantity;
}, 0);

console.log(totalAmount);
