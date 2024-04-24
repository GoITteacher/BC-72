/**
 * - Стек викликів
 * - Порядок виконання
 */

// function foo1() {
//   console.log('START1');
//   foo2();
//   console.log('END1');
// }

// function foo2() {
//   console.log('START2');
//   foo3();
//   console.log('END2');
// }

// function foo3() {
//   console.log('START3');
//   console.log(hello);
//   console.log('END3');
// }

// foo1();

// ================================

// function foo(i = 0) {
//   console.log(i);
//   if (i === 100) return;
//   foo(i + 1);
// }

// foo();

// ================================

// function foo(userValue) {
//   if (userValue === 1) {
//     return 1;
//   }
//   return userValue * foo(userValue - 1);
// }

// console.log(foo(5));
// console.log(foo(2));
// console.log(foo(3));
// console.log(foo(8));
// console.log(foo(10));

// ================================
