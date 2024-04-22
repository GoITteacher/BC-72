/**
 * Цикли
 *
 * - Цикл for
 * - Відлік від 0 до N
 * - Обратний відлік від N до 0
 * - Збільшення/зменшення лічильника на 2+
 * - Інкремент і декремент
 * - Цикли while і do...while
 */

// console.log('Before');

// for (let i = 50; i <= 100; i += 5) {
//   console.log('Hello', i);
// }

// console.log('After');

// ====================================

// ====================================

// const message = 'Hello world';

// for (let i = 0; i < message.length; i++) {
//   console.log(`${i + 1})`, message[i]);
// }

// for (let i = 0; i < message.length; i++) {
//   const element = message[i];
//   console.log(element);
// }

// for (let i = message.length - 1; i >= 0; i--) {
//   console.log(message[i]);
// }

// for (let i = 0; i < message.length; i += 2) {
//   console.log(message[i]);
// }

// let salary = 1200;

// for (let i = 1; i <= 4; i++) {
//   console.log('Хочу більше');
//   salary += Math.round(Math.random() * 200);
// }

// console.log(salary);

/**
 * -------------------------------
 */

// let salary = 800;
// let dream = 3000;

// while (salary < dream) {
//   console.log('Хочу більше');
//   const rand = Math.round(Math.random() * 200);
//   salary += rand;
//   console.log(`Ok! Додаємо ще ${rand}! Тепер ваша зп - ${salary}`);
// }

// ====================================

/* const rand = Math.round(Math.random() * 100); // 99
let userValue;

while (userValue !== rand) {
  userValue = +prompt('Enter number: '); //99

  if (userValue > rand) {
    console.log('<');
  } else {
    console.log('>');
  }
}

console.log('Вітаємою!!'); */

// ====================================

// let message = '    Hello   world  test      string     ';

// while (message.includes('  ')) {
//   console.log(message);
//   message = message.replace('  ', ' ');
// }

// console.log(message);
// ====================================

/* let salary = 1200;
let dream = 1000;

while (salary < dream) {
  console.log('Хочу більше');
  const rand = Math.round(Math.random() * 200);
  salary += rand;
  console.log(`Ok! Додаємо ще ${rand}! Тепер ваша зп - ${salary}`);
}

console.log('End', salary); */

// ===========

// let salary = 3000;
// let dream = 1000;

// do {
//   console.log('Хочу більше');
//   const rand = Math.round(Math.random() * 200);
//   salary += rand;
//   console.log(`Ok! Додаємо ще ${rand}! Тепер ваша зп - ${salary}`);
// } while (salary < dream);

// console.log('End', salary);

// ====================================

// ==========
// break;
// continue;

// const message = 'Hello world test';

// for (let i = 0; i < message.length; i++) {
//   console.log(message[i]);
//   if (message[i] === ' ') {
//     console.log('The end');
//     break;
//   }
// }

// for (let i = 0; i < message.length; i++) {
//   if (message[i] === ' ') {
//     continue;
//   }
//   console.log(message[i]);
// }
