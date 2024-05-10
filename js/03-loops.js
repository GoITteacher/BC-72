/**
 * Деструктуризація об'єкта в циклі
 */

// const colors = [
//   { red: 255, green: 12, blue: 123, alpha: 0.2 },
//   { red: 251, green: 12, blue: 123 },
//   { red: 252, green: 12, blue: 123, alpha: 0.4 },
//   { red: 254, green: 12, blue: 123 },
//   { red: 253, green: 12, blue: 123, alpha: 0.5 },
//   { red: 252, green: 12, blue: 123 },
//   { red: 251, green: 12, blue: 123 },
//   { red: 252, green: 12, blue: 123, alpha: 0.5 },
// ];

// for (const { red, green, blue, alpha = 1 } of colors) {
//   console.log(red, green, blue, alpha);
// }

/**
 * Без деструктуризації
 */

// const redColors = [];

// for (const color of colors) {
//   redColors.push(color.red);
// }

// console.log(redColors);

/**
 * З деструктуризацією
 */

// const redColors = [];

// for (const { red } of colors) {
//   redColors.push(red);
// }

// console.log(redColors);

// const colors = [
//   { red: 155, green: 12, blue: 123, alpha: 0.2 },
//   { red: 51, green: 12, blue: 123 },
//   { red: 252, green: 12, blue: 123, alpha: 0.4 },
//   { red: 154, green: 12, blue: 123 },
//   { red: 53, green: 12, blue: 123, alpha: 0.5 },
//   { red: 252, green: 12, blue: 123 },
//   { red: 151, green: 12, blue: 123 },
//   { red: 52, green: 12, blue: 123, alpha: 0.5 },
// ];

// const result1 = colors.filter(color => color.red > color.blue);
// const result2 = colors.filter(({ red, blue }) => red > blue);

//!===============================================================

// const user = {
//   name: 'vlad',
//   age: 12,
//   isStudent: false,
//   isAdmin: true,
//   city: 'Dnipro',
// };

// const result = Object.entries(user);

// for (const [key, value] of result) {
//   console.log(key, value);
// }
