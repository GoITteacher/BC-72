/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */
//!===============================================================
// REST

/* 
function calculate(max,...args) {
  let total = 0;
  const max = args.shift();
  for (const num of args) {
    total += num;
  }
  console.log(total);
}

calculate(1, 2, 3, 4, 5);
calculate(5, 5);
calculate(1, 7);
calculate(1, 7, 10);
calculate(1, 7, 10, 50);
calculate(); */

function filterNumbers(min, ...arr) {
  for (const num of arr) {
    if (num > min) {
      console.log(num);
    }
  }
}

// filterNumbers('hawdaw', 1, 2, 4, 8, 4, 1, 2, 4, 7, 2, 1, 2, 4, 7, 8, 4, 3, 1);

//!===============================================================
//! SPREAD
// const numbers = [1, 2, 3, 4, 5, 6, 7, 7];
// const copy = [...numbers];
// console.log(copy);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const result = ['START', ...arr1, 'HELLO1', ...arr2, 'HELLO2', ...arr3, 'END'];
// console.log(result);

// const item = 'Hello';
// const copy = [item, ...arr1, item];
// console.log(copy);
//!===============================================================

// const numbers = [1, 2, 3, 3, 4, 6, 1, 2, 2, 4, 6, 6, 1, 2];
// const max = Math.max(...numbers);
// console.log(max);

// const numbers = [1, 2, 3, 4, 5];
// const test = [5, 1, 2];
// numbers.push(...test);
// console.log(numbers);

// const arr = [1, 2, 3, 4, 5, 1, 12, 45, 5];
// calculate(...arr);
// function calculate(...args) {
//   let total = 0;
//   for (const num of args) {
//     total += num;
//   }
//   console.log(total);
// }

//!===============================================================

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const max = Math.max(...temps);
// const min = Math.min(...temps);

// console.log(max, min);

/**
 * Створення масиву і тип за посиланням
 */

// const a = [{ x: 10 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log(a === b);

// b[0].x = 'Hello';

// console.log(a[0].x);

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
// const obj = { x: 10 };
// const copyObj = { ...obj };

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };

// const objC = {
//   test: 'hello',
//   ...objA,
//   ...objB,
//   myProps: 'test',
// };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */

/* const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
  online: false,
  isAdmin: false,
  userName: 'Anonym',
};

const userSettings = {
  showNotifications: false,
  online: true,
  userName: 'Vasya',
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings); */

// ========================
/* 
function getUser(user) {
  const templateUse = {
    username: 'Anonym',
    city: null,
    isStudent: false,
    isAdmin: false,
    isTeacher: false,
    age: 1,
    phoneNumber: null,
  };

  const result = {
    ...templateUse,
    ...user,
  };

  return result;
}

const result = getUser({ username: 'Volodka' });
const result1 = getUser({ phoneNumber: '123234234' });
const result2 = getUser({ phoneNumber: '123234234', username: 'Hello' });
 */
