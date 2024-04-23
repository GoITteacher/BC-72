/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const salaries = [2, 6, 4, 3, 5, 1, 3, 5];
// let total = 0;

// for (const item of salaries) {
//   if (item % 2 === 0) {
//     total += item;
//   }
// }

// console.log(total);

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i++) {
//   const name = namesArr[i];
//   const phone = phonesArr[i];

//   console.log(name, phone);
// }

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = 'FIRST Welcome to the future LAST';

// const result = string.split(' ').slice(1, -1).join(' ');
// console.log(result);

// let result = string.split(' ');
// result.pop();
// result.shift();
// result = result.join('');

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// =========================================

// const values = [2, 17, 94, 1, 23, 37, 0];
// let min = Infinity; // 0

// for (const num of values) {
//   if (num < min) {
//     min = num;
//   }
// }

// console.log(min);

// =========================================

// const arr = [1, 2, 4, 5, 6, 8, 1, 2, 3, 5, 6, 7];

// let max = -Infinity;

// for (const item of arr) {
//   if (item > max) {
//     max = item;
//   }
// }

// console.log(max);

// =========================================

// const arr = [1, 2, 4, 5, 6, 8, 1, 2, 3, 5, 6, 7];

// function getAvg(numbers) {
//   let total = 0;

//   for (const item of numbers) {
//     total += item;
//   }

//   return total / numbers.length;
// }

// const result = getAvg(arr);
// console.log(result);

// ==========================================

const arr = [4, 1, 4, 7, 2, 3, 7];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
}

console.log(arr);

// =======================

// let x = 10;
// let y = 20;

// let tmp = x;
// x = y;
// y = tmp;

// =======================
