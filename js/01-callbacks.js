/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */
//!===============================================================

// function myDay(currentDay, callback) {
//   console.log('Застелити ліжко');
//   console.log('Почистити зуби');
//   console.log('Поснідати');
//   console.log(`зібрати портфель на ${currentDay}`);
//   console.log('Піти до школи');
//   console.log('позайматись');
//   console.log('Повернутись зі школи');

//   callback();

//   console.log('Вільний час');
//   console.log('Повечеряти');
//   console.log('Лягти спати\n\n\n\n');
// }

// function goToDanceSchool() {
//   console.log('піти до школи танців');
//   console.log('повернутись школи танців');
// }

// function goToMusicSchool() {
//   console.log('піти до музичної школи');
// }

// function goToHome() {}

// function goToShopping() {
//   console.log('Вау,');
// }

// myDay('Понеділок', goToDanceSchool);
// myDay('Вівторок', goToMusicSchool);
// myDay('Середа', goToHome);
// myDay('Четвер', goToShopping);
// myDay('Пятниця', goToMusicSchool);
//!===============================================================

/**
 * Функція calc(a, b, callback)
 */
/* 
function calc(x1, callback) {
  const res = callback(x1, x2);
  console.log(`Result: ${res}`);
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function myFun(a, b) {
  return Math.pow(a + b * 2, 2);
}

function foo1(a, b) {
  if (a > b) {
    return a * b;
  }

  return 0;
}

calc(5, 3, myFun); */

//!===============================================================

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

/* 
function each(array, callback) {
  const result = [];
  for (const el of array) {
    const data = callback(el);
    result.push(data);
  }
  return result;
}

console.log(
  each([64, 49, 36, 25, 16], function foo1(value) {
    return value * 2;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  }),
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  }),
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  }),
);
 */

//!===============================================================
// const myValue = 10;

// function foo(callback) {
//   callback();
//   callback();
//   callback();
// }

// foo(function () {
//   console.log('Hello callback');
// });
