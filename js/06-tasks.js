/*
 * Напиши скрипт перевірки підписки користувача придоступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = 'pro';

// const isVip = sub === 'vip';
// const isPro = sub === 'pro';
// const isOk = isVip || isPro;

// if (sub === 'vip' || sub === 'pro') {
//   console.log('Ok');
// } else {
//   console.log('Not ok');
// }

/*
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Можно открыть чат? ', canOpenChat);

// ===========================================

// console.log(1 && 5); // 5
// console.log(5 && 1); // 1
// console.log(0 && 2); // 0
// console.log(2 && 0); // 0

// console.log('' && 'Mango'); // -
// console.log('Mango' && ''); // -
// console.log('Mango' && 'Poly'); // p
// console.log('Poly' && 'Mango'); // m

// console.log(true || false); // t
// console.log(false || true); //t
// console.log(true || true); //t
// console.log(3 || false); // 3
// console.log(false || 3); //3
// console.log(3 || true); //3
// console.log(true || 3); //t

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // false
// console.log(!'Mango'); // false
// console.log(!0); // true
// console.log(!''); // true

// console.log(true && false); // f
// console.log(false && true); // f
// console.log(true && true); // t
// console.log(false && false); // f

// console.log(true || false); //t
// console.log(false || true); //t
// console.log(true || true); //t
// console.log(false || false); //f

// console.log(!true); // f
// console.log(!false); // t
// console.log(!!true); //t
// console.log(!!false); //f

// console.log(1 === 1 && 2 === 2); // t
// console.log(1 === 2 && 2 === 2); // f
// console.log(1 === 1 || 2 === 2); // t
// console.log(1 === 2 || 2 === 2); // t

// console.log(1 > 2 && 2 < 3); // f
// console.log(1 < 2 && 2 < 3); // t
// console.log(1 > 2 || 2 < 3); // t
// console.log(1 < 2 || 2 < 3); // t

// ======================================

/* Використовуючи конструкцію if..else і prompt, напиши код, який запитуватиме:
`"Яка офіційна назва JavaScript?"`. Якщо користувач вводить `ECMAScript`, то
показуй alert з рядком `"Вірно!"`, інакше - ` "Не знаєте? ECMAScript!"` */

// const userValue = prompt('Яка офіційна назва JavaScript?').toLowerCase().trim();

// if (userValue === 'ecmascript' || userValue === 'es6') {
//   alert('Вірно!');
// } else {
//   alert('Не знаєте? ECMAScript!');
// }

// ======================================

/* Напиши скрипт, який виводить в консоль рядок "Це позитивне число", якщо
користувач ввів число більше нуля. Якщо було введено нуль, виводь в
консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути
рядок "Це негативне число". */

// const userNumber = +prompt('Enter your number');
// if (userNumber > 0) {
//   console.log('Це позитивне число');
// } else if (userNumber === 0) {
//   console.log('Це нуль');
// } else {
//   console.log('Це негативне число');
// }

// ======================================
