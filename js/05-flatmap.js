/**
 * Метод flat
 */

// const arr = [1, [2, 3, 4], [5, [6], 7]];

// const result = arr.flat();

// console.log(result);

/**
 * Метод flatMap
 */

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

/* 
const tags = tweets
  .map(tweet => {
    return tweet.tags;
  })
  .flat(1); */

// const tags = tweets.flatMap(tweet => {
//   return tweet.tags;
// });

// console.log(tags);

// ==================================

const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: '6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 },
  { make: 'Toyota', model: '4Runner', amount: 19, price: 34210 },
  { make: 'Toyota', model: 'Sequoia', amount: 16, price: 45560 },
  { make: 'Toyota', model: 'Tacoma', amount: 4, price: 24320 },
  { make: 'Ford', model: 'F-150', amount: 11, price: 27110 },
  { make: 'Ford', model: 'Fusion', amount: 13, price: 22120 },
  { make: 'Ford', model: 'Explorer', amount: 6, price: 31660 },
];

const markup = allCars
  .map(car => {
    return `<li class="car-item">
  <p>${car.make} - ${car.model}</p>
  <p>Amount - ${car.amount}</p>
  <p>Price - ${car.price}</p>
</li>`;
  })
  .join('\n');

console.log(markup);
