// 1. Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з
//    них.

/* function task1(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
} */

/* function task1(a, b, c) {
  return Math.max(a, b, c);
} */

/* function task1() {
  const args = Array.from(arguments);
  let max = args[0];
  for (const item of arguments) {
    if (item > max) {
      max = item;
    }
  }
  return max;
}  */

// console.log(task1(6, 4, 6));
// console.log(task1(2, 2, 4));
// console.log(task1(4, 6, 4));

// 1. Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та
//    повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і
//    false, якщо ні.

// function task2(value, min, max) {
//   if (value > min && value < max) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function task2(value, min, max) {
//   return value > min && value < max;
// }

// console.log(task2(105, 0, 100));

// 1. Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.

/* function task3(str) {
  return str[0];
} */

// 1. Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.

/* function task4(str) {
  return str[str.length - 1];
} */
// function task4(str) {
//   return str.slice(-1);
// }

// console.log(task4('Hello'));

// 1. Напиши функцію, яка приймає довільну кількість рядків і обєднує останню літеру цих рядків у змінну.

/* function task5() {
  const args = Array.from(arguments);
  let result = '';
  for (const str of args) {
    result += str.slice(-1);
  }
  return result;
} */

// console.log(task5('Hello', 'World', 'Test', 'Words'));

// 1. Напиши функцію, яка приймає число і повертає true, якщо число парне, і false,
//    якщо ні.

// function task6(num) {
//   return num % 2 === 0;
// }

// console.log(task6(3));

//========================================================

// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.

// function task7(a, b) {
//   if (a === 0 || b === 0) return null;
//   return a * b;
// }

// console.log(task7(0, 5));
// console.log(task7(5, 0));
// console.log(task7(5, 5));

//========================================================

// 1. Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у
//    тег div. Приклад: на вході був рядок `"Hello world"` а на виході рядок
//    `"<p>Hello world<p>"`

// function task8(str) {
//   return `<p>${str}</p>`;
// }

// console.log(task8('Hello world'));
// console.log(task8('Test'));

//========================================================

// 1. Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова
//    розділені пробілами).

// function task9(string) {
//   const result = string.split(' ');
//   return result.length;
// }
// console.log(task9('hello world awd srf awd'));
//========================================================

// 1. Напиши функцію, яка приймає рядок і повертає його довжину помножену на
//    кількість слів в цьому рядку.

// function task10(row) {
//   const countWords = row.split(' ').length;
//   return row.length * countWords;
// }
//========================================================

// 1. Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому
//    (a, e, i, o, u). Використовуйте метод includes та цикл.

// message = 'Hello world'
// function task11(str) {
//   const symbols = 'aeiou';
//   let count = 0;
//   for (const item of str.toLowerCase()) {
//     if (symbols.includes(item)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(task11('Hello wOrld'));

//========================================================

// 1. Напиши функцію, яка приймає рядок і повертає новий рядок, де слова
//    розташовані у зворотному порядку.

// function task12(str) {
//   const arr = str.split(' ');
//   const result = [];
//   for (const word of arr) {
//     result.unshift(word);
//   }
//   return result.join(' ');
// }

// console.log(task12('Hello world test'));

// =======================================================
// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//    якщо всі аргументи є числами, і false, якщо ні.

// function task13() {
//   const args = Array.from(arguments);
//   for (const item of args) {
//     if (item === +item) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(task13(1, 2, 4, 5, true, 3, 2, 2));

// =======================================================

// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//    об'єднаними в один рядок, розділений комами.

// function task14() {
//   const args = Array.from(arguments);
//   return args.join(', ');
// }
// console.log(task14(1, 1, 3, 4, 5));
// console.log(task14('hello', 'world'));

// =======================================================

// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
//    добуток.

// function multiNumbers() {
//   let total = 1;
//   const args = Array.from(arguments);

//   for (const item of args) {
//     total *= item;
//   }

//   return total;
// }

// console.log(multiNumbers('1', 2, 6, '5'));

// =======================================================

// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.

// 1. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим
// 1. Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один
//    цілий рядок.
// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нулю то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.
