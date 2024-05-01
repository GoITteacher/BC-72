//!===============================================================
/* 
[].map((el, idx, arr)=>{})
[].filter((el, idx, arr)=>{})
[].find((el, idx, arr)=>{})
[].every((el, idx, arr)=>{})
[].some((el, idx, arr)=>{})
[].reduce((acc, el, idx ,arr)=>{})
[].toSorted(()=>{})
[].sort(()=>{})
 */

//!===============================================================

/* function getChangeModels(cars) {
  return cars.map((car, idx, arr) => {
    const copy = { ...car };
    copy.model = car.model.toUpperCase();
    return copy;
  });
} */

/* function getMyCars(cars) {
  return cars.map((car, id, arr) => {
    const result = {
      brand: car.brand,
      model: car.model,
    };

    return result;
  });
}
console.table(getMyCars(cars)); */

//!===============================================================
/**
 * Метод filter
 *
 * - Поелементно перебирає оригінальний массив
 * - Повертає новий масив (з елементами або порожній)
 * - Додає в масив, що повертається, елементи, які задовольняють умові коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
 */

const numbers = [1, 2, 4, 65, 1, 34, 56, 3, 2, 4, 6, 8, 3, 2, 1, 4, 6, 9, 6];

/* const filteredNumbers = numbers.filter((el, idx, arr) => {
  return el % 2 === 0 && el > 10;
}); */

// const filteredNumbers = numbers.filter(el => el > 100000);
// [1, 2, 4, 65, 34, 56]
// console.log(filteredNumbers);

/**
 * ---------------------------
 */
const allCars = [
  {
    id: 1,
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    id: 2,
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    id: 3,
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    id: 4,
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    id: 5,
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
 * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
 * значення параметра threshold.
 */

// const filterByPrice = (cars, threshold) => {
//   return cars.filter(car => car.price < threshold);
// };

// console.table(filterByPrice(allCars, 30000));
// console.table(filterByPrice(allCars, 25000));

/**
 * Нехай функція getCarsWithDiscount повертає масив автомобілів
 * властивість onSale яких true.
 */

// const getCarsWithDiscount = cars => {
//   return cars.filter(car => car.onSale);
// };

// const getCarsWithoutDiscount = cars => {
//   return cars.filter(car => !car.onSale);
// };

// console.table(getCarsWithDiscount(allCars));
// console.table(getCarsWithoutDiscount(allCars));

/**
 * Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається
 * зі значенням параметра type.
 */

// const getCarsWithType = (cars, type) => {
//   return cars.filter(car => car.type === type);
// };

// console.table(getCarsWithType(allCars, 'suv'));
// console.table(getCarsWithType(allCars, 'sedan'));

// function removeCarById(cars, id) {
//   return cars.filter(car => car.id !== id);
// }
// console.log(removeCarById(allCars, 5));

//!===============================================================
