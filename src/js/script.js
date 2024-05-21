import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';
import './modules/images';

//!===============================================================
// fetch('https://jsonplaceholder.typicode.com/users', {
//   headers: {
//     apiKey: 'awdawdawd',
//     test: 'awdawdawd',
//     words: 'hello test',
//   },
// });

//!===============================================================

// fetch('https://jsonplaceholder.typicode.com/posts');
// fetch(
//   'https://jsonplaceholder.typicode.com/posts?userId=1&id=2&type=hot&test=helloworld',
// );

//!===============================================================

// function getPostsByUserId(userId) {
//   const BASE_URL = 'https://jsonplaceholder.typicode.com';
//   const END_POINT = '/posts';
//   const params = new URLSearchParams({
//     userId: userId,
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const options = {
//     headers: {
//       apiKey: 'Hello world',
//     },
//   };

//   return fetch(url, options).then(res => res.json());
// }

// function fetchPosts(query) {
//   const BASE_URL = 'https://newsapi.org/v2';
//   const END_POINT = '/everything';
//   const params = new URLSearchParams({
//     q: query,
//     language: 'en',
//     sortBy: 'popularity',
//   });

//   const url = `${BASE_URL}${END_POINT}?${params}`;

//   const options = {
//     headers: {
//       header1: 1,
//       header2: 2,
//       'X-Api-Key': '12312312312312',
//     },
//   };

//   return fetch(url, options).then(res => res.json());
// }

// fetchPosts('Bitcoin').then(data => {
//   console.log(data);
// });

//!===============================================================
