/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false

// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean('')); // false

// console.log(Boolean(3)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean('hello')); // true
// console.log(Boolean('false')); // true
// console.log(Boolean('0')); // true
// console.log(Boolean('null')); // true
// console.log(Boolean(' ')); // true

/**
 * --------------------------------
 */

// Завжди повертає ліву частину якщо там false, в інших повертає праву частину

// const balance = 5000;
// const age = 13;

// console.log(balance > 1000 && age > 18);
// console.log(5 && 'mango'); //'mango'
// console.log('' && 'mango'); // ''

/**
 * --------------------------------
 */
// Завжди повертає ліву частину якщо там true, в інших повертає праву частину

// console.log(false || 5); // 5
// console.log(false || null); // null
// console.log('hello' || null); // 'hello'

// const defaultValue = 'Anonym';
// const username = 'Volodka';

// const message = `Hello ${username || defaultValue}`;
// console.log(message);

/**
 * --------------------------------
 */

// console.log(!5); // false
// console.log(!false); // true

/**
 * --------------------------------
 */

// console.log(true && 3); // 3
// console.log(false && 3); // f
// console.log(true && 4 && 'kiwi'); // k
// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // t
// console.log(true || 3 || 4); // t
// console.log(true || false || 7); // t
// console.log(null || 2 || undefined); // 2

// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3

// ================================

// true && true || false && false || true && true && false || true; => true

// console.log(
//   (true && true) || (false && false) || (true && true && false) || true,
// );

// 1 + 0 + 0 + 1 = 2(true)

/* 
true - 1
false - 0
&& - *
|| - +
*/

// =================================
const age = 13;
const balance = 500;
const isAdmin = false;

const isAdult = age > 18;
const isPositiveBalance = balance > 100;
const isValidUser = (isAdult && isPositiveBalance) || isAdmin;

if (isValidUser) {
}
