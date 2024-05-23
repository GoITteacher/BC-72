// import axios from 'axios';

// async function test() {
//   axios.post('http://localhost:3000/books');
// }

// test();
//!===============================================================
// async function getBooks() {
//   const url = 'http://localhost:3000/books';
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

// function loadData() {
//   getBooks().then(x => {
//     console.log(x);
//   });
// }

// async function loadData() {
//   try {
//     const x = await getBooks();
//     console.log(1, x);
//     console.log(2, x);
//   } catch {
//     console.log('Error');
//   }
// }

// loadData();

//!===============================================================

// async function foo() {}

// const foo1 = async () => {};

// const obj = {
//   async showName() {},
// };

// class User {
//   async myMethod() {}
// }

// document.addEventListener('click', async () => {});

//!===============================================================

// async function renderBooks() {
//   const books = await getBooks();
//   console.log(books);
// }

// renderBooks();

//!===============================================================

// async function getBook(id) {
//   const url = 'https://jsonplaceholder.typicode.com/comments/' + id;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// async function loadBook() {
//   const promises = [];
//   for (let i = 1; i <= 100; i++) {
//     const bookPromise = getBook(i);
//     promises.push(bookPromise);
//   }

//   const result = await Promise.allSettled(promises);
//   console.log(result);
// }

// loadBook();

//!===============================================================

// async function foo() {
//   return 'Hello world';
// }

// console.log(foo());

// const result = [1, 2, 3, 4, 4, 5, 6, 1, 1].map(async el => {
//   return el * 2;
// });

// console.log(result);
//!===============================================================
