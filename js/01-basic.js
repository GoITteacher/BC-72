/**
 * Деструктуризація об'єкта
 */

// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   phoneNumber: '123123123',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

//!===============================================================

// const username = user.username;
// const age = user.age;
// const city = user.city;
// const country = user.country;
// const phoneNumber = user.phoneNumber
// const { username, age, city, country, phoneNumber } = user;

//!===============================================================

// const test = user.username;
// const test1 = user.city;
// const test2 = user.country;
// const { username: test, city: test1, country: test2 } = user;

//!===============================================================

// const username = user.username || 'Anonym';
// const { username = 'Anonym' } = user;
// console.log(username);

//!===============================================================

// const name = user.username || 'Anonym';
// const city = user.city;
// const country = user.country;
// const { username: name = 'Anonym', city, country } = user;

// const { city: myCity = 'Kyiv' } = user;

//!===============================================================

// const test1 = user.city
// const test2 = user.city
// const test3 = user.city

// const { city: test1, city: test2, city: test3 } = user;
// console.log(test1, test2, test3);

//!===============================================================

/**
 * Глибока деструктуризація об'єкта
 */

// const user = {
//   username: 'Jacob name',
//   age: 25,
//   city: 'Dnipro',
//   phoneNumber: '123123123',
//   country: 'Ukraine',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// const { html, css, js } = user.skills;

// const {
//   skills: { html, css, js },
// } = user;
//!===============================================================

// const playlist = {
//   info: {
//     name: 'test',
//     rating: 5,
//     year: 2025,
//   },

//   author: {
//     firstName: 'awdawdaw',
//     lastName: 'awdawda',
//   },

//   testInfo: {
//     x: 10,
//     y: 20,
//   },
// };

// const { name, rating, year } = playlist.info;
// const { firstName, lastName } = playlist.author;

// const {
//   info: { name, rating, year },
//   author: { firstName, lastName },
//   testInfo: {x,y} = {},
// } = playlist;

// const { x, y } = playlist.testInfo || {};

// console.log(x, y);
//!===============================================================

/**
 * Деструктуризація масива
 */

// const arr = [1, 2, 3, 4, 5];
/* 
const x1 = arr[0];
const x2 = arr[1];
const x3 = arr[2];
*/
// const [x1, x2, x3] = arr;
//!===============================================================

// const arr = [1, 2, 3, 4, 5];
// const [x1, , , x2, x3] = arr;
// console.log(x1, x2, x3);

//!===============================================================

// const arr = [];
// const [firstElem = 10, secondElem = 20] = arr;
// console.log(firstElem, secondElem);

//!===============================================================

// let t1 = 't1';
// let t2 = 't2';
// [t2, t1] = [t1, t2];
// console.log(t1, t2);

// let q = 10;
// let t = 20;
// let s = 30;
// let d = 40;
// let r = 50;

// [q, d, r, s, t] = [s, r, s, t, d];

/* 
q=30;
d=50;
r=30;
s=20;
t=40;
*/

// console.log(q, d, r, s, t);

//!===============================================================

// REST

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
// const [x1, x2, ...numbers] = arr;
// console.log(x1, x2);
// console.log(numbers);

// const numbers = [...arr];
// const [...numbers] = arr;
//!===============================================================

// const book = {
//   id: 123123,
//   author: 'Test Author',
//   price: 123,
//   title: 'title',
//   desc: 'desc',
// };

// const { price, id, ...bookInfo } = book;

// console.log(bookInfo);
