const LOCAL_STORAGE_KEYS = {
  TITLE: 'title',
  AUTHOR: 'author',
};

const key1 = 'user';

/**
 * JSON
 */

/* 
string
number
boolean
null
object
array
*/

// const arr = [10, 20, 30, 40, 50];
// const zip = JSON.stringify(arr);
// console.log(zip);

// const str = '[10,20,30,40,50]';
// const data = JSON.parse(str);
// console.log(data);

//!===============================================================

// const userJson = prompt('Enter your json data');
// const data = JSON.parse(userJson);
// console.log(data);

//!===============================================================

/* const user = {
  name: 'Test name',
  age: 20,
};
const zip = user.toString();
console.log(zip); */
// const str = '[object Object]';

/* const user = {
  name: 'Test name',
  age: 20,
};
const zip = JSON.stringify(user);
console.log(zip); */

// const str = '{"name":"Test name","age":20}';
// const data = JSON.parse(str);
// console.log(data);

//!===============================================================
// JSON.stringify()
// JSON.parse()

// const data1 = JSON.parse('Hello world');
// const data2 = JSON.parse('"Hello world"');

//!===============================================================
/**
 * LocalStorage
 */

/* const LS_KEY = 'Array of names';
const names = ['Alice', 'Kate', 'Emma'];
*/

// localStorage.setItem(LOCAL_STORAGE_KEYS.TITLE, 'Test Title');
// localStorage.setItem(LOCAL_STORAGE_KEYS.AUTHOR, 'Test Author');
//!===============================================================
/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
// const user = {
//   name: 'Volodka',
//   age: 20,
//   items: [1, 2, 4, 4, 1, 2, 4, 5],
// };
// const userJson = JSON.stringify(user);
// localStorage.setItem(key1, userJson);
//!===============================================================
/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */
// const data1 = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTHOR);
// const data2 = localStorage.getItem(LOCAL_STORAGE_KEYS.TITLE);
// const data3 = JSON.parse(localStorage.getItem(key1));

// console.log(data1);
// console.log(data2);
// console.log(data3);

//!===============================================================
/**
 * Видалення
 */

// localStorage.removeItem('price');
// localStorage.removeItem('price');

/**
 * LocalStorage не може зберігати функції
 */

// function add(a, b) {
//   return a + b;
// }

// const calculator = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// };

// const jsonCalc = JSON.stringify(calculator);

// localStorage.setItem('calc', jsonCalc);

//!===============================================================

// const tomato = [10, 29, 30, 40, 506, 0];
// const data = JSON.stringify(tomato);
// localStorage.setItem('tomato', data);

// const data = localStorage.getItem();
// const result = JSON.parse(data);

// const data = localStorage.getItem('tomato');
// const arr = JSON.parse(data);
// console.log(arr);

//!===============================================================

// console.log(x);
// const userData = prompt('Enter json');
// const data = JSON.parse(userData);
// console.log(data);
//!===============================================================

// console.log('START');

// try {
//   console.log('Before Error');
//   JSON.parse('Hello world');
//   console.log('AFTER ERROR');
// } catch (e) {
//   console.log(e);
// }

// console.log('END');
//!===============================================================
/* try {
  console.log('BEFORE ERROR');

  console.log(10);

  console.log('AFTER ERROR');
} catch (err) {
  console.log('ERROR');
}

console.log('END'); */

//!===============================================================

// const userJson = prompt('Enter your json');

// let data;

// try {
//   data = JSON.parse(userJson);
// } catch {
//   data = '';
// }

// console.log(data);
// console.log('END');

//!===============================================================

// const user1 = { name: 'Vasya' };
// const user2 = { name: 'Petya' };
// const user3 = { name: 'Vanya' };
// const user4 = { name: 'Kolya' };

/* localStorage.setItem('user1', JSON.stringify(user1));
localStorage.setItem('user2', JSON.stringify(user2));
localStorage.setItem('user3', JSON.stringify(user3));
localStorage.setItem('user4', JSON.stringify(user4));

try {
  const data1 = JSON.parse(localStorage.getItem('user1'));
} catch {
  console.log(err);
}
try {
  const data2 = JSON.parse(localStorage.getItem('user1'));
} catch {
  console.log(err);
}
try {
  const data2 = JSON.parse(localStorage.getItem('user1'));
} catch {
  console.log(err);
}
try {
  const data2 = JSON.parse(localStorage.getItem('user1'));
} catch {
  console.log(err);
} */

//!===============================================================

function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    return data;
  }
}

// const user1 = { name: 'Vasya' };
// const user2 = { name: 'Petya' };
// const user3 = { name: 'Vanya' };
// const user4 = { name: 'Kolya' };

// saveToLS('user1', user1);
// saveToLS('user2', user2);
// saveToLS('user3', user3);
// saveToLS('user4', user4);

// const data1 = loadFromLS('user1');
// const data2 = loadFromLS('user2');
// const data3 = loadFromLS('user3');
// const data4 = loadFromLS('user4');

//!===============================================================

// const headerEl = document.querySelector('.js-header');
// const data = loadFromLS('header');
// headerEl.textContent = data;
