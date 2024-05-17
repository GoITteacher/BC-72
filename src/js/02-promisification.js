/*
 * Промісифікація:
 * - Функція, яка повертає проміс ✅ ❌
 */

//!===============================================================

/* function createPromise(delay, value, isActive = true) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isActive) resolve(value);
      else reject(value);
    }, delay);
  });
  return promise;
}

const promise1 = createPromise(3000, '1', true);
const promise2 = createPromise(1000, '2', false);
const promise3 = createPromise(5000, '3', true);
const promise4 = createPromise(2000, '4', false);

promise1.then(onFulfilled, onRejected);
promise2.then(onFulfilled, onRejected);
promise3.then(onFulfilled, onRejected);
promise4.then(onFulfilled, onRejected); */
//!===============================================================

// function createRandomPromise(value, delay) {
//   const promise = new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random > 0.5) resolve(value);
//       else reject(value);
//     }, delay);
//   });

//   return promise;
// }

// for (let i = 1; i <= 5; i++) {
//   createRandomPromise(i, i * 100);
//   promise.then(onFulfilled).catch(onRejected);
// }

//!===============================================================
/* const p1 = createRandomPromise('1', 400);
const p2 = createRandomPromise('2', 300);
const p3 = createRandomPromise('3', 200);
const p4 = createRandomPromise('4', 100);

p1.then(onFulfilled).catch(onRejected);
p2.then(onFulfilled).catch(onRejected);
p3.then(onFulfilled).catch(onRejected);
p4.then(onFulfilled).catch(onRejected); */

//!===============================================================
// function onFulfilled(data) {
//   console.log('✅', data);
// }
// function onRejected(data) {
//   console.log('❌', data);
// }
//!===============================================================

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

// function getArr(arr) {
//   const result = arr.filter(() => true);
//   return Promise.resolve(result);
// }

// function getArr(arr) {
//   const result = arr.filter(() => true);
//   return Promise.reject(result);
// }

// console.log(getArr([1, 2, 3, 4]));

// const promise = Promise.resolve('Hello world');
// console.log(promise);

//!===============================================================

/* const promise = Promise.resolve([]);

promise
  .then(data => {
    if (data.length === 0) {
      return Promise.reject('Array is empty');
    }
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); */

//!===============================================================
