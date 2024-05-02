/**
 * Ланцюжки методів
 */

// const numbers = [1, 5, 2, 4, 3];

// const greaterThenTwo = numbers.filter(el => el > 2);
// console.log(greaterThenTwo);

// const multByThree = greaterThenTwo.map(el => el * 3);
// console.log(multByThree);

// const sorted = multByThree.toSorted((a, b) => a - b);

// console.log(sorted);

// const sortedbyChaining = numbers
//   .filter(el => el > 2)
//   .map(el => el * 3)
//   .toSorted((a, b) => a - b);

// console.log(sortedbyChaining);

/**
 * -------------------------------------
 */
const allCars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/**
 * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */
// const getModelsOnSale = cars => {
//   return cars.filter(car => car.onSale).map(car => car.model);
// };
// console.log(getModelsOnSale(allCars));

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */
// const getSortedCarsOnSale = cars => {
//   return cars.filter(car => car.onSale).toSorted((a, b) => a.price - b.price);
// };
// console.table(getSortedCarsOnSale(allCars));

// =================================

// const numbers = [1, 3, 5, 2, 3, 4, 1, 2, 34, 6, 7, 2, 1, 1];

// const result = numbers
//   .filter(el => el % 2 === 0)
//   .map((el, idx, arr) => el * arr.length);

// console.log(numbers);
// console.log(result);

//!===============================================================

/* 
{
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 28,
    email: 'alice@example.com',
    isActive: true,
    gender: 'Female',
},
*/

// 1. Знайти користувачів віком від 25 до 40 років.

// const result1 = users.filter(user => user.age >= 30 && user.age < 35);
// console.table(result1);

// 1. Знайти всіх користувачів із активним статусом.

// const result2 = users.filter(user => user.isActive);
// const result3 = users.filter(user => !user.isActive);
// console.table(result3);

// 1. Порахувати кількість користувачів молодше 30 років.
// const result4 = users.filter(user => user.age < 30).length;
// console.log(result4);

// 1. Відсортувати користувачів віком від старшого до молодшого.

// const result5 = users.toSorted((b, a) => {
//   return a.age - b.age;
// });

// console.table(result5);

// 1. Знайти користувачів з електронною поштою на домені gmail.com.

// const result6 = users
//   .filter(user => user.email.endsWith('@gmail.com'))
//   .map(user => `${user.firstName} ${user.lastName}`);

// console.log(result6);
// 1. Знайти всіх жінок серед користувачів.
// 1. Порахувати кількість неактивних користувачів.
