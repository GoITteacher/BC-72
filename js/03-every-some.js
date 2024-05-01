const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/**
 * Метод every
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо всі елементи масиву задовольняють умову
 */

// const isAllOnline = players.every(user => {
//   console.log(user.name);
//   return user.online;
// });

// true && false && true && false && true = false;

// console.log('isAllOnline: ', isAllOnline);

/**
 * Метод some
 *
 * - Поелементно перебирає оригінальний масив
 * - Повертає true якщо хоча б один елемент масиву задовольняє умову
 */
// const isAnyOnline = players.some(user => {
//   return !user.online;
// });

// console.log('isAnyOnline: ', isAnyOnline);

// const anyHardcorePlayers = players;
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);

// const arr = [0, 1, 2, 3, 3, 5, 5, 1, 0, 1, 3, 5];

// while (!arr.every(el => el === 0)) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr[i]--;
//     }
//   }
//   console.log(arr.join());
// }
