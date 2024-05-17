/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

//!===============================================================
/* const promise = new Promise((resolve, reject) => {
  const random = Math.random(); // 0 - 1
  setTimeout(() => {
    if (random > 0.5) {
      const result = {
        message: 'Смачного',
        random,
      };
      resolve(result);
    } else {
      const result = {
        message: 'Sorry',
        random,
      };
      reject(result);
    }
  }, 300);

  console.log('Hello promise');
}); */

// const promise = new Promise((resolve, reject) => {
//   resolve('Смачного');
// });

//!===============================================================

// promise.then(onFulfilled, onRejected);

function onFulfilled(data) {
  console.log('✅', data.message, data.random);
}

function onRejected(data) {
  console.log('❌', data.message, data.random);
}

//!===============================================================

// promise
//   .then(message => {
//     console.log('✅', message);
//   })
//   .catch(error => {
//     console.log('❌', error);
//   });

// promise.then(onFulfilled).catch(onRejected);

//!===============================================================

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     random > 0.5 ? resolve('Ok') : reject('Error');
//   });
// });

// promise
//   .then(message => {
//     console.log('✅', message);
//   })
//   .catch(error => {
//     console.log('❌', error);
//   })
//   .finally(() => {
//     console.log('Close Modal');
//     console.log('Close Btn');
//     console.log('Close Page');
//   });

//!===============================================================
// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

/* promise
  .then(data => {
    console.log(data);
    return 'Hello world';
  })
  .then(undefined, () => {})
  .then(
    () => {},
    () => {},
  )
  .then(data1 => {
    console.log(data1);
    return 'TEst';
  })
  .catch(err => {
    console.log(err);
    return 'MyError';
  })
  .then(data2 => {
    console.log(data2);
  }); */

/* const promise = new Promise((resolve, reject) => {
  resolve('Ok');
}); */
/* 
promise
  .then(data1 => {
    console.log(data1);
    console.log(awdawdawd);
    return 'Ok1';
  })
  .then(data2 => {
    console.log(data2);
    return 'Ok2';
  })
  .then(data3 => {
    console.log(data3);
    return 'Ok3';
  })
  .then(data4 => {
    console.log(data4);
    return 'Ok4';
  })
  .then(data5 => {
    console.log(data5);
    return 'Ok5';
  })
  .then(data6 => {
    console.log(data6);
    return 'Ok6';
  })
  .catch(err => {
    console.log(err);
  });
 */
