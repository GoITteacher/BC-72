import axios from 'axios';

const axios2 = axios.create({
  baseURL: 'http://localhost:3000/books',
  headers: {
    'api-key': 'My Test API Key',
  },
  params: {
    apiKey: 'helloWorld',
  },
});

//!===============================================================
export async function getBooks() {
  const response = await axios2.get('');
  return response.data;
}

export async function createBook(book) {
  book = getDefaultBook(book);
  const response = await axios2.post('', book);
  return response.data;
}

export async function updateBook({ id, ...book }) {
  const response = await axios2.patch(`/${id}`, book, {
    headers: {},
    params: {},
  });
  return response.data;
}

export async function resetBook({ id, ...book }) {
  book = getDefaultBook(book);
  const response = await axios2.put(`/${id}`, book);
  return response.data;
}

export function deleteBook(id) {
  return axios2.delete(`/${id}`);
}

//!===============================================================
function getDefaultBook(book) {
  const defaultBook = {
    rating: Math.round(Math.random() * 10),
    price: Math.round(Math.random() * 1000),
    img: `https://source.unsplash.com/720x1280/?random=${Math.round(
      Math.random() * 1000,
    )}&book`,
  };

  return { ...defaultBook, ...book };
}

//!===============================================================
// const BASE_URL = 'http://localhost:3000';
// const END_POINT = '/books';

// export function getBooks() {
//   const url = `${BASE_URL}${END_POINT}`;
//   return fetch(url).then(res => res.json());
// }

// export function createBook(book) {
//   book = getDefaultBook(book);
//   const url = `${BASE_URL}${END_POINT}`;

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(url, options).then(res => res.json());
// }

// export function updateBook({ id, ...book }) {
//   console.log(book);
//   const url = `${BASE_URL}${END_POINT}/${id}`;

//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(url, options).then(res => res.json());
// }

// export function resetBook({ id, ...book }) {
//   book = getDefaultBook(book);
//   const url = `${BASE_URL}${END_POINT}/${id}`;

//   const options = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(url, options).then(res => res.json());
// }

// export function deleteBook(id) {
//   const url = `${BASE_URL}${END_POINT}/${id}`;

//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(url, options).then(res => res.json());
// }

// function getDefaultBook(book) {
//   const defaultBook = {
//     rating: Math.round(Math.random() * 10),
//     price: Math.round(Math.random() * 1000),
//     img: `https://source.unsplash.com/720x1280/?random=${Math.round(
//       Math.random() * 1000,
//     )}&book`,
//   };

//   return { ...defaultBook, ...book };
// }
