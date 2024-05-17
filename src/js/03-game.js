//!===============================================================

// function createPromise(delay, value, isActive = true) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isActive) resolve(value);
//       else reject(value);
//     }, delay);
//   });
//   return promise;
// }

// const promises = [];

// for (let i = 0; i < 10; i++) {
//   const promise = createPromise(i * 1000, i, Math.random() > 0.5);
//   promises.push(promise);
// }

// Promise.allSettled(promises).then(res => {
//   console.log(res);
// });

//!===============================================================
// const p1 = createPromise(1000, '1', false);
// const p2 = createPromise(3000, '2', false);
// const p3 = createPromise(5000, '3', true);
// const p4 = createPromise(2000, '4', false);
// const p5 = createPromise(4000, '5', true);

// const promises = [p1, p2, p3, p4, p5];

// const result = Promise.all(promises);
// const result = Promise.allSettled(promises);
// const result = Promise.race(promises);

//!===============================================================
/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

const startBtn = document.querySelector('.start-btn');
const container = document.querySelector('.game-container');
const result = document.querySelector('.result');

function createPromise(delay, isActive = true) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) resolve('🤑');
      else reject('👿');
    }, delay);
  });
  return promise;
}

startBtn.addEventListener('click', () => {
  const promises = [];

  for (let i = 0; i < 8; i++) {
    container.children[i].textContent = '';
    const p1 = createPromise((i + 1) * 100, Math.random() > 0.1);
    p1.then(smile => {
      container.children[i].textContent = smile;
    }).catch(smile => {
      container.children[i].textContent = smile;
    });
    promises.push(p1);
  }

  Promise.allSettled(promises).then(arr => {
    const smiles = arr.map(obj => obj.value || obj.reason);
    // const isWinner = smiles.every(el => el === '🤑');
    const isWinner = !smiles.includes('👿');
    result.textContent = isWinner ? 'Winner' : 'Loser';
  });
});
