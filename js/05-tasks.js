/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = !user.premium;

// for (const i of Object.keys(user)) {
//   console.log(`${i}: ${user[i]}`);
// }

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// let totalSalary = 0;

// for (const salary of values) {
//   totalSalary += salary;
// }
// totalSalary /= values.length === 0 ? 1 : values.length;

// console.log(totalSalary);

//! ==============================================================

/* 
Напиши функцію, яка створює об'єкт з ім'ям і віком.
Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
Поверни цей об'єкт.
*/

function createUser(name, age, address) {
  const user = { name, age, address };

  return user;
}

const user1 = createUser('Volodka', 25);
const user2 = createUser('Yaroslav', 25);
const user3 = createUser('Vlad', 25, 'Dnipro');
const user4 = createUser('Anton', 25);

//! ==============================================================

/* 
Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
Поверни оновлений об'єкт.
*/

// function addAddress(obj) {
//   obj.address = 'Dnipro';
//   return obj;
// }

// addAddress(user1);
// addAddress(user3);

//! ==============================================================

/* Напиши функцію, яка приймає об'єкт і новий вік.
Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
Поверни оновлений об'єкт. */

// function setAge(userObj, newAge) {
//   if (newAge > 0 && newAge < 100) {
//     userObj.age = newAge;
//   }
// }

// console.log(user3);

// setAge(user3, 37);
// setAge(user3, 106);

// console.log(user3);

//! ==============================================================

// const copy = {};
// for (const key of Object.keys(user1)) {
//   if (key !== 'age') {
//     copy[key] = user1[key];
//   }
// }
// console.log(copy);

//! ==============================================================

/* 
Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
*/

// function getName(obj) {
//   return obj.name;
// }

// console.log(getName(user1));
// console.log(getName(user2));
// console.log(getName(user3));

//! ==============================================================

// function getMarkup(user) {
//   return `<li>
//     <h5>Name: ${user.name}</h5>
//     <p>Age: ${user.age}</p>
// </li>`;
// }

// const str1 = getMarkup(user1);
// const str2 = getMarkup(user2);
// const str3 = getMarkup(user3);
// const str4 = getMarkup(user4);

// const res = str1 + str2 + str3 + str4;

// console.log(res);
//! ==============================================================

// Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.

/* function hasAddress(obj) {
  // return Object.keys(obj).includes('address');
  return obj.address !== undefined;
}

console.log(hasAddress(user1));
console.log(hasAddress(user2));
console.log(hasAddress(user3));
console.log(user3.address); */
//! ==============================================================

/* Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
Поверни результат. */

// function concatObj(obj1, obj2) {
//   const resultObj = {};

//   for (const key of Object.keys(obj1)) {
//     resultObj[key] = obj1[key];
//   }

//   for (const key of Object.keys(obj2)) {
//     resultObj[key] = obj2[key];
//   }

//   return resultObj;
// }

// const a = {
//   x: 10,
//   x1: 51,
//   x2: 25,
//   x3: 64,
// };

// const b = {
//   x: 25,
//   y1: 51,
//   y2: 25,
//   y3: 64,
// };

// const result = concatObj(a, b);
// console.log(result);

// =======================================

/* Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
Поверни об'єкт. */

// function createUser2(username, age, address) {
//   const user = {
//     username: username ?? 'Anonym',
//     age: age || 0,
//     address,
//   };

//   return user;
// }

// const user5 = createUser2('');

// console.log(user5);

// const arr = [1, 2, '', false, 0, 'Hello', undefined, null, 1, 2, 4, 6, 7];

// =======================================
