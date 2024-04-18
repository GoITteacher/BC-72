/**
 * Функции
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 * - Область видимості функцій
 */

// ===================================

// function calculateTotal() {
//   console.log('Кинути мясо');
//   console.log('Кинути картоплю');
//   console.log('зробити засмажку');
//   console.log('крок 5');
//   console.log('крок 10');
// }

// const x = Math.random()
// ===================================

// function sum(x, y, q) {
//   const total = x + y + q; // 15
//   return total;
// }

// const x = sum(2, 5, 8) + sum(3, 1, 1);

// console.log(x);

// console.log(sum(0, 0, 5));

// ===================================

/* function sayHello(name) {
  let name;
  console.log(`Hello ${name}`);
}

sayHello('Roman');
sayHello('Mila');
sayHello(); */

// ===================================

// function foo(x) {
//   x.toString();
// }

// foo(10);
// ===================================
// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");

// ===================================
// const x = 10;

// function foo1() {
//   const x = 20;
// }

// ===================================

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

// function calcBMI(weight, height) {
//   weight = weight.replace(',', '.');
//   height = height.replace(',', '.');

//   weight = +weight;
//   height = +height;

//   const result = weight / height ** 2;

//   return +result.toFixed(1);
// }

// const bmi1 = calcBMI('88,3', '1.75');
// const bmi2 = calcBMI('56,3', '1.56');
// const bmi3 = calcBMI('88,3', '1.75');
// const bmi4 = calcBMI('88,3', '1.75');
// const bmi5 = calcBMI('88,3', '1.75');
