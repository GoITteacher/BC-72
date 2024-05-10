/**
 * Деструктуризація об'єкта в параметрах функції
 */

// function showInfo(name, age, city, isStudent, isAdmin, country) {}
// showInfo('Vlad', 25, 'Dnipro', false, false, 'Ukraine');

// function showInfo({ name, age, city, country, isStudent, isAdmin }) {
//   console.log(name);
//   console.log(age);
//   console.log(city);
//   console.log(country);
//   console.log(isStudent);
//   console.log(isAdmin);
// }

// const user = {
//   age: 25,
//   country: 'Ukraine',
//   isStudent: false,
//   isAdmin: true,
//   name: 'Vlad',
//   city: 'Kyiv',
// };

// showInfo(user);

//!===============================================================

const colors = [
  { red: 255, green: 12, blue: 123 },
  { red: 251, green: 12, blue: 123 },
  { red: 252, green: 12, blue: 123 },
  { red: 254, green: 12, blue: 123 },
  { red: 253, green: 12, blue: 123 },
  { red: 252, green: 12, blue: 123 },
  { red: 251, green: 12, blue: 123 },
  { red: 252, green: 12, blue: 123 },
];

// colors.forEach(({ red, green, blue }) => {
//   console.log(`${red}-${green}-${blue}`);
// });

// const result = colors.map(({ blue, ...color }) => {
//   return color;
// });
// console.log(result);

// const result = colors.map(({ red, green, blue }) => {
//   return `<div style="background-color: rgb(${red}, ${green}, ${blue});"></div>`;
// });

// console.log(result);
//!===============================================================
// function showInfo({ x, y }) {
//   console.log(x + y);
// }
// showInfo({ x: 10, y: 20 });

//!===============================================================

// throttle(myFunction, 1000, {
//   leading: false,
// });

//!===============================================================

// class User {
//   constructor({
//     name = 'Anonym',
//     age = 1,
//     city = 'Kyiv',
//     country = 'Ukraine',
//   }) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
//   }
// }

// const user1 = new User({
//   name: 'Vlad',
//   age: 25,
//   country: 'Ukraine',
//   city: 'Dnipro',
// });

// console.log(user1);
