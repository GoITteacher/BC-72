/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */
//!===============================================================

// function foo() {
//   console.log('Hello', this);
// }
// foo.call(10);
// foo.apply('WORLD');

/* function showName() {
  console.log(this.name);
}

const user1 = {
  name: 'Volodka',
};
const user2 = {
  name: 'Maks',
};
const user3 = {
  name: 'Roman',
};

showName.call(user1);

showName.call(user2);

showName.apply(user2);

showName.apply(user3); */
//!===============================================================

// const user1 = {
//   name: 'Ivan',
//   potato() {
//     console.log(this.name, 'Готує картоплю');
//   },
// };

// const user2 = {
//   name: 'Vlad',
// };
// const user3 = {
//   name: 'Max',
// };

// user1.potato.call(user2);
// user1.potato.apply(user3);

//!===============================================================
// const showThis = function (a, b, c) {
//   console.log(a, b, c);
//   console.log('showThis -> this', this);
// };

// showThis(10, 20);

// const objA = {
//   name: 'OBJ-A',
// };

// const red = 123;
// const green = 123;
// const blue = 123;
// showThis.call(objA, red, green, blue);

// const rgb = [123, 123, 123];
// showThis.apply(objA, rgb);

/**
 * -------------------------------
 */
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// changeColor.call(hat, 'orange');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

//!===============================================================
// function sayHello() {
//   console.log('Hello world', this);
// }

// const copyHello = sayHello.bind(10);

// sayHello();
// obj1.copyHello.apply(20);

//!===============================================================

/* 
11 - arrow function
9 - bind
7 - call apply
5 - object
3 - window undefined
*/

//!===============================================================
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// const sweater = {
//   color: 'green',
// };

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor.call(sweater, 'red');

// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

/**
 * -------------------------------
 */
//!===============================================================

/* function foo(x) {
  const arrow = () => {
    console.log(x);
  };

  return arrow;
}

const result = foo(50);
const result1 = foo(150);

result();
result();
result();
result();
result();

result1();
result1();
result1();
result1();
result1();
result1();
 */
//!===============================================================

/* 
Замикання - це можливість функції зберегти в середині себе навколишнє оточення

*/

// function getCalc(firstname, lastname) {
//   const str = `${firstname} ${lastname}`;

//   const calc = (a, b) => {
//     console.log(str, a + b);
//   };

//   return calc;
// }

// const calc1 = getCalc('Hello', 'World');
// const calc2 = getCalc('Test1', 'test2');

// debugger;
// calc1(10, 20);
// calc2(10, 20);
