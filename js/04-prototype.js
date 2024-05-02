/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей с hasOwnProperty()
 * - Ланцюжки прототипів
 */
//!===============================================================

// const objA = {
//   x: 10,
//   y: 20,
//   sayHello() {
//     console.log(this.t1);
//   },
// };

// const objB = Object.create(objA);

// objB.t1 = 10;
// objB.t2 = 20;

// console.log(objB);

// objB.sayHello();

// for (const key in objB) {
//   console.log(key);
// }

//!===============================================================

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.hasOwnProperty('legs')); // false

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

/**
 * ----------------------------------------
 */

// const objC = { a: 'objC prop' };

// const objB = Object.create(objC);
// objB.a = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA.a);
// console.log(objB);
// console.log(objC);

// console.log(objA.hasOwnProperty('a'));
// console.log(objA.a);

// console.log(objA.hasOwnProperty('b'));
// console.log(objA.b);

// console.log(objA.hasOwnProperty('c'));
// console.log(objA.c);

// console.log(objA.hasOwnProperty('x'));
// console.log(objA.x);

//!===============================================================

const userProto = {
  setProps(name, age) {
    this.name = name;
    this.age = age;
  },

  showName() {
    console.log(this.name);
  },

  showAge() {
    console.log(this.age);
  },
};

const user1 = Object.create(userProto);
const user2 = Object.create(userProto);
const user3 = Object.create(userProto);
const user4 = Object.create(userProto);
const user5 = Object.create(userProto);

user1.setProps('Vlad', 23);
user2.setProps('Max', 15);
user3.setProps('Lina', 24);

user1.showName();
user2.showName();
user3.showName();
