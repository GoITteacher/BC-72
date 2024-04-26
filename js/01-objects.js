/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Доступ до властивостей через крапку
 * - Вкладені властивості
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

// const user1 = {
//   username: 'Max',
//   age: 10,
//   address: {
//     city: 'Lviv',
//     country: 'Ukraine',
//     street: 'MyStreet',
//     location: {
//       x: '0.123234231',
//       y: '0.123234231',
//     },
//   },
//   username: 'Roman',
//   username: 'Kolya',
// };

// console.log(user1);

// console.log(user1.username);
// console.log(user1.address.location.x);

// function sayHello(message) {
//   const firstName = message.message.chat.first_name;
//   console.log(`Hello ${firstName}`);
// }

// sayHello(message);

//! ==============================================

// const message = {
//   update_id: 936140186,
//   message: {
//     message_id: 1617795,
//     from: {
//       id: 433982686,
//       is_bot: false,
//       first_name: 'Max',
//       username: 'pashchenko_v_r',
//       language_code: 'uk',
//     },
//     chat: {
//       id: 433982686,
//       first_name: 'Max',
//       username: 'pashchenko_v_r',
//       type: 'private',
//     },
//     date: 1708417633,
//     text: 'Hello',
//   },
// };

// console.log(message['message']['from']['first_name']);
// console.log(message.message.from.first_name);
// console.log(message.message['from'].first_name);
// console.log(message.message['from']['first_name']);

// message.update_id = 9999;
// message.message.from.first_name = 'TEST FIRST NAME';

// message.message.from.test = 'Hello world';
// console.log(message);

/**
 * -----------------------------------
 */
// const user1 = {
//   username: 'Max',
//   age: 10,
// };

// console.log(user1['   ']);
// user1['Hello World 123 * /'] = 'my test props';
// console.log(user1);

// console.log(user1.username);
// console.log(user1.username);
// console.log(user1.username);
// console.log(user1.username);
// console.log(user1.username);

// const propName = prompt('Enter prop name:');
// const value = prompt(`Enter value for ${propName}`);
// user1[propName] = value;
// console.log(user1);

/**
 * -----------------------------------
 */

// function foo(values) {
//   const x = values.x;
//   const y = values.y;
//   const sum = x + y;
//   return sum;
// }

// const obj = {
//   x: 100,
//   y: 200,
// };

// foo(obj);
